import { TimelineMax as Timeline, Power1 } from 'gsap';

export const enter = (pathname, node, appears) => {
  const delay = 0.5;
  const timeline = new Timeline({ paused: true })
  timeline
    .from(node, 0, { display: 'none', autoAlpha: 0, delay })
    .staggerFrom(node.children, 0.375, { autoAlpha: 0, x: -25, ease: Power1.easeOut }, 0.125)

  timeline.play()
}

export const exit = (node) => {
  const timeline = new Timeline({ paused: true });

  timeline.to(node, 0.15, { autoAlpha: 0, ease: Power1.easeOut });
  timeline.play();
}
