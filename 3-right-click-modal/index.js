const attachContextMenu = (() => {
    const contextMenu = document.createElement('ul');
    const hidemenu = e => {
        if(e === true || !contextMenu.contains(e.target)) {
            contextMenu.remove();
            document.removeEventListener('click', hidemenu);
        }
    }
    const showmenu = e => {
        e.preventDefault();
        contextMenu.className = "context-menu";
        contextMenu.innerHTML = "<div>Item 1</div><div>Item 2</div>";
    
        document.body.appendChild(contextMenu);
    
        const { innerWidth, innerHeight } = window;
        const { offsetWidth, offsetHeight } = contextMenu;
        
        if(e.clientX >= (innerWidth - offsetWidth))
            contextMenu.style.transform = 'translateX(-100%)';
        else
            contextMenu.style.transform = 'translateX(0%)';

        contextMenu.style.left = e.clientX + 'px';
        contextMenu.style.top = e.clientY + 'px';
        document.addEventListener('click', hidemenu);
    }
    return (el) => {
        el.addEventListener('contextmenu', showmenu);
    };
})();

document.querySelectorAll('button')
    .forEach(btn => {
        attachContextMenu(btn);
    });
