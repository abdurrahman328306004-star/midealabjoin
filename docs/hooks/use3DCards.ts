import { useEffect } from 'react';

export const use3DCards = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.dynamic-3d-card');
    
    cards.forEach((card) => {
      const cardElement = card as HTMLElement;
      let cardRect: DOMRect;

      const handleMouseEnter = () => {
        cardRect = cardElement.getBoundingClientRect();
        cardElement.style.transition = 'transform 0.1s linear';
      };

      const handleMouseMove = (e: MouseEvent) => {
        if (!cardRect) return;

        const x = e.clientX - cardRect.left - (cardRect.width / 2);
        const y = e.clientY - cardRect.top - (cardRect.height / 2);

        const rotateX = (-y / cardRect.height) * 20;
        const rotateY = (x / cardRect.width) * 20;

        cardElement.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      };

      const handleMouseLeave = () => {
        cardElement.style.transition = 'transform 0.5s ease';
        cardElement.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
      };

      cardElement.addEventListener('mouseenter', handleMouseEnter);
      cardElement.addEventListener('mousemove', handleMouseMove);
      cardElement.addEventListener('mouseleave', handleMouseLeave);

      // Cleanup
      return () => {
        cardElement.removeEventListener('mouseenter', handleMouseEnter);
        cardElement.removeEventListener('mousemove', handleMouseMove);
        cardElement.removeEventListener('mouseleave', handleMouseLeave);
      };
    });
  }, []);
};