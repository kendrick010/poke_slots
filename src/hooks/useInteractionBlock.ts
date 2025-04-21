import { useEffect } from 'react';

export function useInteractionBlock(shouldBlock: boolean) {
  useEffect(() => {
    if (!shouldBlock) return;

    const blockInteraction = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    const events = [
      'keydown', 'keyup', 'keypress',
      'mousedown', 'mouseup', 
      'click', 'dblclick',
      'touchstart', 'touchend', 'touchmove',
      'contextmenu'
    ];

    events.forEach(event => {
      document.addEventListener(event, blockInteraction, { capture: true });
    });

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, blockInteraction, { capture: true });
      });
    };
  }, [shouldBlock]);
}