const linkWithTooltip = document.querySelectorAll('.has-tooltip');

document.body.addEventListener('click', (e) => {
  const target = e.target;
  const tooltips = document.querySelectorAll('.tooltip');
  const { top: top1, left: left1 } = target.getBoundingClientRect();
  if (target.classList.contains('has-tooltip')) {
    e.preventDefault();
    const targetTooltip = target.nextElementSibling;
    targetTooltip.style.left = left1 + 'px';
    targetTooltip.style.top = top1 + 20 + 'px';
    if (!targetTooltip.classList.contains('tooltip_active')) {
      tooltips.forEach((el) => el.classList.remove('tooltip_active'));
      targetTooltip.classList.add('tooltip_active');
    } else {
      tooltips.forEach((el) => el.classList.remove('tooltip_active'));
    }
  }
});
document.addEventListener('DOMContentLoaded', () => {
  linkWithTooltip.forEach((el) => {
    const title = el.getAttribute('title');
    const text = `<div class="tooltip"">
    ${title}
  </div>`;
    el.insertAdjacentHTML('afterend', text);
  });
});
