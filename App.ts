document.addEventListener('DOMContentLoaded', main)

function main():void {
    
    const header = document.querySelector<HTMLHeadingElement>('.header')
    const main = document.querySelector<HTMLElement>('.main')
    
    window.addEventListener('scroll', () => {
        
        const y = main?.getBoundingClientRect().y ?? 0
    
        y <= -5 ? header?.classList.add('active') : header?.classList.remove('active') 
        
        
    })

    gsap.from('.main__image-2',1.2,{opacity:0,y:200,delay:.1})
    gsap.from('.main__image-3',1.2,{opacity:0,y:200,delay:.5})
    gsap.from('.main__body',1.2,{opacity:0,y:-60,delay:1})
    gsap.from('.main__bird-1',1.2,{opacity:0,x:80,delay:1})
    gsap.from('.main__bird-2',1.2,{opacity:0,x:-80,delay:1})
    gsap.from('.main__image-1',1.2,{opacity:0,y:200,delay:1.2})
    gsap.from('.main__image-4',1.2,{opacity:0,x:200,delay:1.3})

}


