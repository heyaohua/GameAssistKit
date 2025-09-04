/**
 * 游戏辅助工具集导航页面脚本
 * 提供基本交互功能和动画效果
 */

document.addEventListener('DOMContentLoaded', function() {
    // 初始化页面加载动画
    initPageAnimation();
    
    // 添加卡片悬停效果
    initCardHoverEffects();
});

/**
 * 初始化页面加载动画
 * 为页面元素添加淡入效果
 */
function initPageAnimation() {
    const header = document.querySelector('header');
    const intro = document.querySelector('.intro');
    const gameCards = document.querySelectorAll('.game-card');
    
    // 页面元素依次淡入
    setTimeout(() => {
        header.style.opacity = '1';
        header.style.transform = 'translateY(0)';
    }, 100);
    
    setTimeout(() => {
        intro.style.opacity = '1';
        intro.style.transform = 'translateY(0)';
    }, 300);
    
    // 游戏卡片依次淡入
    gameCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 500 + (index * 200));
    });
}

/**
 * 初始化卡片悬停效果
 * 为游戏卡片添加交互动画
 */
function initCardHoverEffects() {
    const gameCards = document.querySelectorAll('.game-card:not(.coming-soon)');
    
    gameCards.forEach(card => {
        // 鼠标悬停时添加脉冲效果
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.game-icon i');
            icon.classList.add('pulse');
        });
        
        // 鼠标离开时移除脉冲效果
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.game-icon i');
            icon.classList.remove('pulse');
        });
    });
}

// 添加CSS样式
const style = document.createElement('style');
style.textContent = `
    /* 页面加载动画 */
    header, .intro, .game-card {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s ease, transform 0.5s ease;
    }
    
    /* 脉冲动画 */
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
    
    .pulse {
        animation: pulse 1s infinite;
    }
`;
document.head.appendChild(style);