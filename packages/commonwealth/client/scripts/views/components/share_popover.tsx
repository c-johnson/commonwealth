/* @jsx m */

import m from 'mithril';
import { ClassComponent, ResultNode, render, setRoute, getRoute, getRouteParam, redraw, Component } from 'mithrilInterop';
import { int } from 'aws-sdk/clients/datapipeline';

import { CWIconButton } from './component_kit/cw_icon_button';
import { CWPopoverMenu } from './component_kit/cw_popover/cw_popover_menu';

type SharePopoverAttrs = { commentId?: int };

export class SharePopover extends ClassComponent<{ commentId?: int }> {
  view(vnode: ResultNode<SharePopoverAttrs>) {
    const domain = document.location.origin;

    return (
      <CWPopoverMenu
        menuItems={[
          {
            iconLeft: 'copy',
            label: 'Copy URL',
            onclick: async () => {
              const currentRouteSansCommentParam = getRoute()
                .split('?comment=')[0];
              if (!vnode.attrs.commentId) {
                await navigator.clipboard.writeText(
                  `${domain}${currentRouteSansCommentParam}`
                );
              } else {
                await navigator.clipboard.writeText(
                  `${domain}${currentRouteSansCommentParam}?comment=${vnode.attrs.commentId}`
                );
              }
            },
          },
          {
            iconLeft: 'twitter',
            label: 'Share on Twitter',
            onclick: async () => {
              if (!vnode.attrs.commentId) {
                await window.open(
                  `https://twitter.com/intent/tweet?text=${domain}${getRoute()}`,
                  '_blank'
                );
              } else {
                await window.open(
                  `https://twitter.com/intent/tweet?text=${domain}${getRoute()}?comment=${
                    vnode.attrs.commentId
                  }`,
                  '_blank'
                );
              }
            },
          },
        ]}
        trigger={<CWIconButton iconName="share" iconSize="small" />}
      />
    );
  }
}
