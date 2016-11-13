const EASINGS = {
        standard: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
        accelerate: 'cubic-bezier(0.4, 0.0, 1, 1)',
        decelerate: 'cubic-bezier(0.0, 0.0, 0.2, 1)'
      },
      ANIMATIONS = {
        modal: {
          frames: [
            { transform: 'translateZ(0) scale(0.75, 0.95)', opacity: 0 },
            { transform: 'translateZ(0) scale(1, 1)', opacity: 1 }
          ],
          opts: {
            open: {
              easing: EASINGS.standard,
              fill: 'both',
              duration: 140,
            },
            close: {
              easing: EASINGS.standard,
              fill: 'both',
              duration: 100
            }
          }
        },
        overlay: {
          frames: [
            { opacity: 0 },
            { opacity: 1 }
          ],
          opts: {
            open: {
              easing: 'ease',
              fill: 'both',
              duration: 270
            },
            close: {
              easing: 'ease',
              fill: 'both',
              offset: 40,
              duration: 180
            }
          }
        }
      };

export default {
  properties: {

    visible: {
      type: Boolean,
      reflectToAttribute: true
    }

  },

  /**
   * Animate the modal open and give it a visible attribute
   * @return {undefined}
   */
  animateModalOpen() {
    let overlay = ANIMATIONS.overlay,
        modal = ANIMATIONS.modal;

    this.visible = true;
    this.$.overlay.animate(overlay.frames, overlay.opts.open);
    this.$.modal.animate(modal.frames, modal.opts.open);
  },

  /**
   * Animate the modal close and remove the visible attribute
   * @return {undefined}
   */
  animateModalClosed() {
    let animations,
        overlay = ANIMATIONS.overlay,
        modal = ANIMATIONS.modal,
        toPromise = (animation) => new Promise((resolve) => animation.onfinish = resolve);

      animations = [
        this.$.overlay.animate(overlay.frames.slice().reverse(), overlay.opts.close),
        this.$.modal.animate(modal.frames.slice().reverse(), modal.opts.close)
      ];

    Promise.all(animations.map(toPromise))
      .then(() => this.visible = false);
  }

};
