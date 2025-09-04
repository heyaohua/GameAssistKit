/**
 * 超自然行动组地图查询应用
 * 用于根据后门状态符号快速查找对应地图和棺椁位置
 */

// 当文档加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    // 获取DOM元素
    const gallery = document.getElementById('gallery');
    const symbolButtons = document.querySelectorAll('.symbol-btn');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    // 当前选中的符号和图片索引
    let currentSymbol = '';
    let currentImages = [];
    let currentIndex = 0;
    
    /**
     * 加载指定符号对应的图片
     * @param {string} symbol - 要加载的符号
     */
    function loadImages(symbol) {
        currentSymbol = symbol;
        gallery.innerHTML = '<div class="loading">正在加载图片...</div>';
        
        // 构建图片路径
        const basePath = `map/${symbol}/`;
        
        // 使用fetch API获取目录列表（在实际应用中，这里需要后端支持）
        // 由于我们没有后端，这里模拟获取图片列表
        fetchImageList(symbol)
            .then(images => {
                if (images.length === 0) {
                    gallery.innerHTML = '<div class="loading">没有找到图片</div>';
                    return;
                }
                
                currentImages = images;
                displayImages(images, basePath);
            })
            .catch(error => {
                console.error('加载图片失败:', error);
                gallery.innerHTML = '<div class="loading">加载图片失败</div>';
            });
    }
    
    /**
     * 模拟获取图片列表
     * @param {string} symbol - 符号
     * @returns {Promise<string[]>} - 图片文件名列表
     */
    function fetchImageList(symbol) {
        // 这里应该是从服务器获取图片列表
        // 由于我们没有后端，这里使用前端硬编码的方式
        // 在实际应用中，这里应该是一个AJAX请求
        
        // 根据目录结构生成图片路径
        return new Promise((resolve) => {
            // 模拟网络延迟
            setTimeout(() => {
                // 这里应该是从服务器获取的图片列表
                // 由于我们没有实际的后端API，这里使用硬编码的方式
                // 实际应用中应该替换为真实的API调用
                const imageMap = {
                    '┓': [
                        '1755683250167.jpg', '1755683251194.jpg', '1755683251381.jpg',
                        '1755683251636.jpg', '1755683252701.jpg', '1755683253654.jpg',
                        '1755683253692.jpg', '1755683254771.jpg', '1755683255685.jpg',
                        '1755683255698.jpg', '1755683255904.jpg', '1755683256604.jpg',
                        '1755683256853.jpg', '1755683257288.jpg', '1755683258578.jpg',
                        '1755683258907.jpg', '1755683259532.jpg', '1755683259918.jpg',
                        '1755683259938.png'
                    ],
                    '┛': [
                        '1755682616154.jpg', '1755682616671.jpg', '1755682617210.jpg',
                        '1755682617352.jpg', '1755682618323.jpg', '1755682618575.png',
                        '1755682618655.jpg', '1755682619737.jpg', '1755682619971.jpg',
                        '1755682620277.jpg', '1755682620355.jpg', '1755682620443.jpg',
                        '1755682620800.jpg', '1755682621247.jpg', '1755682621275.jpg',
                        '1755682621766.jpg', '1755682621913.jpg', '1755682622382.jpg',
                        '1755682622716.jpg', '1755682622876.jpg', '1755682623131.jpg',
                        '1755682623281.jpg', '1755682623682.jpg', '1755682623779.jpg',
                        '1755682623837.jpg', '1755682623924.jpg', '1755682624944.jpg'
                    ],
                    '┣': [
                        '1755682100145.jpg', '1755682100805.jpg', '1755682101280.jpg',
                        '1755682101284.jpg', '1755682101742 (1).jpg', '1755682101742.jpg',
                        '1755682102334.jpg', '1755682102730.jpg', '1755682103825 (1).jpg',
                        '1755682103825.jpg'
                    ],
                    '┫': [
                        '1755681737610.jpg', '1755681737733 (1).jpg', '1755681737733.jpg',
                        '1755681738361.jpg', '1755681738594.jpg', '1755681739868.jpg'
                    ],
                    '┳': [
                        '1755681154297.jpg', '1755681154717.jpg', '1755681155410.jpg',
                        '1755681155792.jpg', '1755681156484.jpg', '1755681156832.jpg',
                        '1755681157607.jpg', '1755681157650.jpg', '1755681158897.jpg',
                        '1755681159361.jpg', '1755681159456.jpg', '1755681160158.jpg',
                        '1755681160311.jpg', '1755681160956.jpg'
                    ],
                    '┻': [
                        '1755680585554.jpg', '1755680586923.jpg', '1755680586974.jpg',
                        '1755680587390.jpg', '1755680587528.jpg', '1755680587667.jpg',
                        '1755680588108.jpg', '1755680588978.jpg'
                    ],
                    '▃': [
                        '1755679911562.jpg', '1755679911725.jpg', '1755679912122.jpg',
                        '1755679912124.jpg', '1755679912707.jpg', '1755679913307.jpg',
                        '1755679913417.png', '1755679913759.jpg', '1755679914298.jpg',
                        '1755679914373.jpg', '1755679914764.jpg', '1755679914824.jpg',
                        '1755679915136.jpg', '1755679915227.png', '1755679915319.jpg',
                        '1755679915446.jpg', '1755679915545.jpg', '1755679915546.jpg',
                        '1755679916220.jpg', '1755679916231.jpg', '1755679916393.png',
                        '1755679916461.jpg', '1755679916486.jpg'
                    ],
                    '▌': [
                        '1755679481607.jpg', '1755679481812.jpg', '1755679482490.jpg',
                        '1755679482520.jpg', '1755679482635.jpg', '1755679482978.jpg',
                        '1755679483793.jpg', '1755679483810.jpg', '1755679483921.jpg',
                        '1755679484197.jpg', '1755679484375.jpg', '1755679484418.jpg',
                        '1755679484500.jpg', '1755679484880.jpg', '1755679485130.jpg',
                        '1755679485395.jpg', '1755679485498.jpg', '1755679485996.jpg',
                        '1755679486261.jpg', '1755679486602.jpg', '1755679486793.jpg',
                        '1755679486959.jpg', '1755679486978.png', '1755679487120.png',
                        '1755679487849.png', '1755679487854.jpg', '1755679487858.jpg',
                        '1755679487890.jpg', '1755679488333.jpg', '1755679488362.jpg',
                        '1755679488646.jpg', '1755679488824.jpg', '1755679489841.jpg'
                    ],
                    '■': [
                        '1755678884640.jpg', '1755678885228.jpg'
                    ]
                };
                
                resolve(imageMap[symbol] || []);
            }, 300);
        });
    }
    
    /**
     * 在画廊中显示图片
     * @param {string[]} images - 图片文件名列表
     * @param {string} basePath - 图片基础路径
     */
    function displayImages(images, basePath) {
        gallery.innerHTML = '';
        
        images.forEach((image, index) => {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            
            const img = document.createElement('img');
            img.src = basePath + image;
            img.alt = `地图 ${index + 1}`;
            img.loading = 'lazy'; // 懒加载图片
            
            // 添加点击事件，打开模态框
            item.addEventListener('click', () => {
                openModal(index);
            });
            
            item.appendChild(img);
            gallery.appendChild(item);
        });
    }
    
    /**
     * 打开模态框显示大图
     * @param {number} index - 图片索引
     */
    function openModal(index) {
        if (currentImages.length === 0) return;
        
        currentIndex = index;
        const imagePath = `map/${currentSymbol}/${currentImages[index]}`;
        modalImg.src = imagePath;
        captionText.innerHTML = `地图 ${index + 1} / ${currentImages.length}`;
        modal.style.display = 'block';
        
        // 更新导航按钮状态
        updateNavButtons();
    }
    
    /**
     * 更新导航按钮状态
     */
    function updateNavButtons() {
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === currentImages.length - 1;
    }
    
    /**
     * 显示上一张图片
     */
    function showPrevImage() {
        if (currentIndex > 0) {
            currentIndex--;
            const imagePath = `map/${currentSymbol}/${currentImages[currentIndex]}`;
            modalImg.src = imagePath;
            captionText.innerHTML = `地图 ${currentIndex + 1} / ${currentImages.length}`;
            updateNavButtons();
        }
    }
    
    /**
     * 显示下一张图片
     */
    function showNextImage() {
        if (currentIndex < currentImages.length - 1) {
            currentIndex++;
            const imagePath = `map/${currentSymbol}/${currentImages[currentIndex]}`;
            modalImg.src = imagePath;
            captionText.innerHTML = `地图 ${currentIndex + 1} / ${currentImages.length}`;
            updateNavButtons();
        }
    }
    
    // 为符号按钮添加点击事件
    symbolButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 移除所有按钮的active类
            symbolButtons.forEach(btn => btn.classList.remove('active'));
            // 为当前按钮添加active类
            button.classList.add('active');
            
            const symbol = button.getAttribute('data-symbol');
            loadImages(symbol);
        });
    });
    
    // 关闭模态框
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    // 点击模态框外部关闭
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // 上一张/下一张按钮事件
    prevBtn.addEventListener('click', showPrevImage);
    nextBtn.addEventListener('click', showNextImage);
    
    // 键盘导航
    document.addEventListener('keydown', (event) => {
        if (modal.style.display === 'block') {
            if (event.key === 'ArrowLeft') {
                showPrevImage();
            } else if (event.key === 'ArrowRight') {
                showNextImage();
            } else if (event.key === 'Escape') {
                modal.style.display = 'none';
            }
        }
    });
});