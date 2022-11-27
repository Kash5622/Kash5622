import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { animated, useSpring } from '@react-spring/web'

function SideNavBar() {
    const [addActive, setAddActive] = useState('home_menu_')
    const styles = useSpring({
        from: {
            width: "13%",
            color:"rgba(3, 5, 7)",
            transition: 300,
            delay:300,
            duration: 5000,
        },
        to: {
            width: "4%",
            delay:300,
            duration: 5000,
        }
    })
    useEffect(() => {
        const allIds = ["home_menu_", "auction", "articles_menu_", "top_menu_", "trending_menu_", "latest_menu_", "movies_menu_", "popular_channels_menu_", "shorts_menu_"]
        allIds.forEach((element) => {
            console.log(element);
            if (document.getElementById(element).classList.contains('active')) {
                document.getElementById(element).classList.remove('active')
            }
        });
        const addActiveClass = (addActive) => {
            document.getElementById(addActive).classList.add('active');
            console.log('clicked')
        }
        addActiveClass(addActive);
    }, [addActive]);

    return (
            <div className='sideNavBar '>
                <div className="">
                <animated.div style={styles} className="yp_side_drawer">
                    <ul className="sections">
                        <li className='hide-from-mobile' id="home_menu_" onClick={() => { setAddActive("home_menu_") }}>
                            <Link to="/home2/" >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.7019 5.35876C10.3836 4.6771 10.8426 4.22033 11.2301 3.92469C11.6002 3.64226 11.8157 3.57843 12 3.57843C12.1843 3.57843 12.3998 3.64226 12.7699 3.92469C13.1574 4.22033 13.6164 4.6771 14.2981 5.35876L16.4697 7.53033L16.7123 7.77297C17.6227 8.68333 17.9207 9.00017 18.0787 9.3816C18.2367 9.76304 18.25 10.1978 18.25 11.4853V15C18.25 16.4354 18.2484 17.4365 18.1469 18.1919C18.0482 18.9257 17.8678 19.3142 17.591 19.591C17.3142 19.8678 16.9257 20.0482 16.1919 20.1469C15.4365 20.2484 14.4354 20.25 13 20.25H11C9.56458 20.25 8.56347 20.2484 7.80812 20.1469C7.07434 20.0482 6.68577 19.8678 6.40901 19.591C6.13225 19.3142 5.9518 18.9257 5.85315 18.1919C5.75159 17.4365 5.75 16.4354 5.75 15V11.4853C5.75 10.1978 5.76328 9.76304 5.92127 9.3816C6.0788 9.00129 6.37558 8.68519 7.27968 7.78098C7.28235 7.77831 7.28502 7.77564 7.28769 7.77297L7.53033 7.53033C7.53049 7.53017 7.53065 7.53001 7.53081 7.52985L9.7019 5.35876ZM6.47015 6.46919L8.64124 4.2981L8.67801 4.26133C9.31331 3.62599 9.84307 3.09619 10.3202 2.73216C10.8238 2.34793 11.3559 2.07843 12 2.07843C12.6441 2.07843 13.1762 2.34793 13.6798 2.73216C14.1569 3.09619 14.6867 3.62598 15.322 4.26132L15.3588 4.2981L17.5296 6.46897C17.5299 6.4692 17.5301 6.46944 17.5303 6.46967L17.773 6.71231L17.7745 6.71384L17.8738 6.81312C17.9389 6.87809 18.0022 6.94139 18.0639 7.00325L22.5303 11.4697C22.8232 11.7626 22.8232 12.2374 22.5303 12.5303C22.2374 12.8232 21.7626 12.8232 21.4697 12.5303L19.7488 10.8095C19.7502 10.9783 19.7501 11.1556 19.75 11.3427L19.75 11.4853V15V15.0549C19.75 16.4225 19.75 17.5248 19.6335 18.3918C19.5125 19.2919 19.2536 20.0497 18.6516 20.6517C18.0497 21.2536 17.2919 21.5125 16.3918 21.6335C15.5248 21.75 14.4225 21.75 13.0549 21.75H13H11H10.9451C9.57754 21.75 8.47522 21.75 7.60825 21.6335C6.70814 21.5125 5.95027 21.2536 5.34835 20.6517C4.74643 20.0497 4.48754 19.2919 4.36652 18.3918C4.24996 17.5248 4.24998 16.4225 4.25 15.0549L4.25 15V11.4853L4.24995 11.3427C4.24987 11.1556 4.24978 10.9783 4.25116 10.8095L2.53033 12.5303C2.23744 12.8232 1.76256 12.8232 1.46967 12.5303C1.17678 12.2374 1.17678 11.7626 1.46967 11.4697L5.93593 7.00341C5.99765 6.9415 6.06107 6.87815 6.12616 6.81312L6.12616 6.81311L6.22625 6.71309L6.22703 6.71231L6.46967 6.46967C6.46983 6.46951 6.46999 6.46935 6.47015 6.46919Z" fill="currentColor"></path>
                                </svg>
                            </Link>
                        </li>
                        <li className="hide-from-mobile " id="auction" Style="cursor:pointer" onClick={() => { setAddActive("auction") }}>

                            <Link to="/home2/" data-load="?link1=auction">

                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fillRule="evenodd" clipRule="evenodd" d="M16.4267 2.24998L16.5 2.25H18.5L18.5733 2.24998C18.966 2.24978 19.269 2.24963 19.5365 2.30284C20.6274 2.51983 21.4802 3.3726 21.6972 4.4635C21.7504 4.73101 21.7502 5.034 21.75 5.42673L21.75 5.5L21.75 5.57327C21.7502 5.966 21.7504 6.26899 21.6972 6.5365C21.4802 7.6274 20.6274 8.48017 19.5365 8.69716C19.269 8.75037 18.966 8.75022 18.5733 8.75002L18.5 8.75H16.5L16.4267 8.75002C16.034 8.75022 15.731 8.75037 15.4635 8.69716C14.3726 8.48017 13.5198 7.6274 13.3028 6.5365C13.2496 6.26899 13.2498 5.966 13.25 5.57328L13.25 5.5L13.25 5.42672C13.2498 5.034 13.2496 4.73101 13.3028 4.4635C13.5198 3.3726 14.3726 2.51983 15.4635 2.30284C15.731 2.24963 16.034 2.24978 16.4267 2.24998ZM16.5 3.75C15.9994 3.75 15.8586 3.75363 15.7561 3.77402C15.2603 3.87265 14.8727 4.26027 14.774 4.75614C14.7536 4.85862 14.75 4.9994 14.75 5.5C14.75 6.0006 14.7536 6.14138 14.774 6.24386C14.8727 6.73973 15.2603 7.12735 15.7561 7.22598C15.8586 7.24637 15.9994 7.25 16.5 7.25H18.5C19.0006 7.25 19.1414 7.24637 19.2439 7.22598C19.7397 7.12735 20.1273 6.73973 20.226 6.24386C20.2464 6.14138 20.25 6.0006 20.25 5.5C20.25 4.9994 20.2464 4.85862 20.226 4.75614C20.1273 4.26027 19.7397 3.87265 19.2439 3.77402C19.1414 3.75363 19.0006 3.75 18.5 3.75H16.5ZM6.5 2.25H6.46165C5.79208 2.24998 5.23335 2.24997 4.78102 2.29598C4.30755 2.34415 3.86818 2.44886 3.47218 2.71346C3.17191 2.91409 2.91409 3.17191 2.71346 3.47218C2.44886 3.86818 2.34415 4.30755 2.29598 4.78102C2.24997 5.23335 2.24998 5.79208 2.25 6.46165V6.5V8.5V8.53835C2.24998 9.20792 2.24997 9.76665 2.29598 10.219C2.34415 10.6925 2.44886 11.1318 2.71346 11.5278C2.91409 11.8281 3.17191 12.0859 3.47218 12.2865C3.86818 12.5511 4.30755 12.6559 4.78102 12.704C5.23335 12.75 5.79207 12.75 6.46164 12.75H6.5H6.53836C7.20793 12.75 7.76665 12.75 8.21898 12.704C8.69245 12.6559 9.13182 12.5511 9.52782 12.2865C9.82809 12.0859 10.0859 11.8281 10.2865 11.5278C10.5511 11.1318 10.6559 10.6925 10.704 10.219C10.75 9.76665 10.75 9.20792 10.75 8.53834L10.75 8.5V6.5L10.75 6.46166C10.75 5.79208 10.75 5.23335 10.704 4.78102C10.6559 4.30755 10.5511 3.86818 10.2865 3.47218C10.0859 3.17191 9.82809 2.91409 9.52782 2.71346C9.13182 2.44886 8.69245 2.34415 8.21898 2.29598C7.76665 2.24997 7.20792 2.24998 6.53835 2.25H6.5ZM4.30554 3.96066C4.41399 3.8882 4.57796 3.82438 4.93283 3.78828C5.30023 3.75091 5.78216 3.75 6.5 3.75C7.21784 3.75 7.69977 3.75091 8.06717 3.78828C8.42204 3.82438 8.58601 3.8882 8.69446 3.96066C8.83095 4.05186 8.94814 4.16905 9.03934 4.30554C9.1118 4.41399 9.17562 4.57796 9.21172 4.93283C9.24909 5.30023 9.25 5.78216 9.25 6.5V8.5C9.25 9.21784 9.24909 9.69977 9.21172 10.0672C9.17562 10.422 9.1118 10.586 9.03934 10.6945C8.94814 10.8309 8.83095 10.9481 8.69446 11.0393C8.58601 11.1118 8.42204 11.1756 8.06717 11.2117C7.69977 11.2491 7.21784 11.25 6.5 11.25C5.78216 11.25 5.30023 11.2491 4.93283 11.2117C4.57796 11.1756 4.41399 11.1118 4.30554 11.0393C4.16905 10.9481 4.05186 10.8309 3.96066 10.6945C3.8882 10.586 3.82438 10.422 3.78828 10.0672C3.75091 9.69977 3.75 9.21784 3.75 8.5V6.5C3.75 5.78216 3.75091 5.30023 3.78828 4.93283C3.82438 4.57796 3.8882 4.41399 3.96066 4.30554C4.05186 4.16905 4.16905 4.05186 4.30554 3.96066ZM5.5 15.25L5.42672 15.25C5.034 15.2498 4.73101 15.2496 4.4635 15.3028C3.3726 15.5198 2.51983 16.3726 2.30284 17.4635C2.24963 17.731 2.24978 18.034 2.24998 18.4267L2.25 18.5L2.24998 18.5733C2.24978 18.966 2.24963 19.269 2.30284 19.5365C2.51983 20.6274 3.3726 21.4802 4.4635 21.6972C4.73101 21.7504 5.034 21.7502 5.42673 21.75L5.5 21.75H7.5L7.57327 21.75C7.966 21.7502 8.26899 21.7504 8.5365 21.6972C9.6274 21.4802 10.4802 20.6274 10.6972 19.5365C10.7504 19.269 10.7502 18.966 10.75 18.5733L10.75 18.5L10.75 18.4267C10.7502 18.034 10.7504 17.731 10.6972 17.4635C10.4802 16.3726 9.6274 15.5198 8.5365 15.3028C8.26899 15.2496 7.966 15.2498 7.57328 15.25L7.5 15.25H5.5ZM4.75614 16.774C4.85862 16.7536 4.9994 16.75 5.5 16.75H7.5C8.0006 16.75 8.14138 16.7536 8.24386 16.774C8.73973 16.8727 9.12735 17.2603 9.22598 17.7561C9.24637 17.8586 9.25 17.9994 9.25 18.5C9.25 19.0006 9.24637 19.1414 9.22598 19.2439C9.12735 19.7397 8.73973 20.1273 8.24386 20.226C8.14138 20.2464 8.0006 20.25 7.5 20.25H5.5C4.9994 20.25 4.85862 20.2464 4.75614 20.226C4.26027 20.1273 3.87265 19.7397 3.77402 19.2439C3.75363 19.1414 3.75 19.0006 3.75 18.5C3.75 17.9994 3.75363 17.8586 3.77402 17.7561C3.87265 17.2603 4.26027 16.8727 4.75614 16.774ZM17.5 11.25L17.4617 11.25C16.7921 11.25 16.2334 11.25 15.781 11.296C15.3075 11.3441 14.8682 11.4489 14.4722 11.7135C14.1719 11.9141 13.9141 12.1719 13.7135 12.4722C13.4489 12.8682 13.3441 13.3075 13.296 13.781C13.25 14.2334 13.25 14.7921 13.25 15.4617L13.25 15.5V17.5L13.25 17.5383C13.25 18.2079 13.25 18.7666 13.296 19.219C13.3441 19.6925 13.4489 20.1318 13.7135 20.5278C13.9141 20.8281 14.1719 21.0859 14.4722 21.2865C14.8682 21.5511 15.3075 21.6559 15.781 21.704C16.2333 21.75 16.7921 21.75 17.4616 21.75H17.5H17.5384C18.2079 21.75 18.7667 21.75 19.219 21.704C19.6925 21.6559 20.1318 21.5511 20.5278 21.2865C20.8281 21.0859 21.0859 20.8281 21.2865 20.5278C21.5511 20.1318 21.6559 19.6925 21.704 19.219C21.75 18.7666 21.75 18.2079 21.75 17.5383V17.5V15.5V15.4617C21.75 14.7921 21.75 14.2334 21.704 13.781C21.6559 13.3075 21.5511 12.8682 21.2865 12.4722C21.0859 12.1719 20.8281 11.9141 20.5278 11.7135C20.1318 11.4489 19.6925 11.3441 19.219 11.296C18.7666 11.25 18.2079 11.25 17.5383 11.25L17.5 11.25ZM15.3055 12.9607C15.414 12.8882 15.578 12.8244 15.9328 12.7883C16.3002 12.7509 16.7822 12.75 17.5 12.75C18.2178 12.75 18.6998 12.7509 19.0672 12.7883C19.422 12.8244 19.586 12.8882 19.6945 12.9607C19.8309 13.0519 19.9481 13.169 20.0393 13.3055C20.1118 13.414 20.1756 13.578 20.2117 13.9328C20.2491 14.3002 20.25 14.7822 20.25 15.5V17.5C20.25 18.2178 20.2491 18.6998 20.2117 19.0672C20.1756 19.422 20.1118 19.586 20.0393 19.6945C19.9481 19.8309 19.8309 19.9481 19.6945 20.0393C19.586 20.1118 19.422 20.1756 19.0672 20.2117C18.6998 20.2491 18.2178 20.25 17.5 20.25C16.7822 20.25 16.3002 20.2491 15.9328 20.2117C15.578 20.1756 15.414 20.1118 15.3055 20.0393C15.169 19.9481 15.0519 19.8309 14.9607 19.6945C14.8882 19.586 14.8244 19.422 14.7883 19.0672C14.7509 18.6998 14.75 18.2178 14.75 17.5V15.5C14.75 14.7822 14.7509 14.3002 14.7883 13.9328C14.8244 13.578 14.8882 13.414 14.9607 13.3055C15.0519 13.169 15.169 13.0519 15.3055 12.9607Z" fill="currentColor"></path>

                                </svg>

                            </Link>

                        </li>
                        <li className="hide-from-mobile " id="articles_menu_" onClick={() => { setAddActive("articles_menu_") }}>
                            <Link to="/home2/" data-load="?link1=articles">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" fill="currentColor" d="M2.62356 2.35132C2.85479 2.21713 3.13998 2.21617 3.3721 2.34882L6.5 4.13619L9.6279 2.34882C9.85847 2.21706 10.1415 2.21706 10.3721 2.34882L13.5 4.13619L16.6279 2.34882C16.86 2.21617 17.1452 2.21713 17.3764 2.35132C17.6077 2.48551 17.75 2.73265 17.75 3V11.25H21C21.4142 11.25 21.75 11.5858 21.75 12V19C21.75 20.5188 20.5188 21.75 19 21.75H9H8.94513C7.57754 21.75 6.47522 21.75 5.60825 21.6335C4.70814 21.5125 3.95027 21.2536 3.34835 20.6517C2.74643 20.0497 2.48754 19.2919 2.36652 18.3918C2.24996 17.5248 2.24998 16.4225 2.25 15.0549V15V3C2.25 2.73265 2.39232 2.48551 2.62356 2.35132ZM19 20.25C19.6904 20.25 20.25 19.6904 20.25 19V12.75H17.75V19C17.75 19.6904 18.3096 20.25 19 20.25ZM16.5499 20.25H9C7.56458 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 18.1919C3.75159 17.4365 3.75 16.4354 3.75 15V4.29238L6.1279 5.65118C6.35847 5.78294 6.64153 5.78294 6.8721 5.65118L10 3.86381L13.1279 5.65118C13.3585 5.78294 13.6415 5.78294 13.8721 5.65118L16.25 4.29239V12V19C16.25 19.4501 16.3581 19.875 16.5499 20.25ZM6.25 9C6.25 8.58579 6.58579 8.25 7 8.25H11C11.4142 8.25 11.75 8.58579 11.75 9C11.75 9.41421 11.4142 9.75 11 9.75H7C6.58579 9.75 6.25 9.41421 6.25 9ZM7 12.25C6.58579 12.25 6.25 12.5858 6.25 13C6.25 13.4142 6.58579 13.75 7 13.75H13C13.4142 13.75 13.75 13.4142 13.75 13C13.75 12.5858 13.4142 12.25 13 12.25H7ZM6.25 17C6.25 16.5858 6.58579 16.25 7 16.25H13C13.4142 16.25 13.75 16.5858 13.75 17C13.75 17.4142 13.4142 17.75 13 17.75H7C6.58579 17.75 6.25 17.4142 6.25 17Z"></path>
                                </svg>
                            </Link>
                        </li>
                    </ul>
                    <ul className="sections">
                        <li className="hide-from-mobile " id="top_menu_" onClick={() => { setAddActive("top_menu_") }}>
                            <Link to="/home2/" data-load="?link1=videos&amp;page=top">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" fill="currentColor" d="M13 6h2v11h-2zM17 3h2v14h-2zM9 9h2v8H9zM5 12h2v5H5zM4 19h16v2H4z"></path>
                                </svg>
                            </Link>
                        </li>
                        <li className="" id="trending_menu_" onClick={() => { setAddActive("trending_menu_") }}>
                            <Link to="/home2/" data-load="?link1=videos&amp;page=trending" >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" fill="currentColor" d="M14.25 7.00003C14.25 6.58582 14.5858 6.25003 15 6.25003H21C21.4142 6.25003 21.75 6.58582 21.75 7.00003V13C21.75 13.4142 21.4142 13.75 21 13.75C20.5858 13.75 20.25 13.4142 20.25 13V8.81069L15.5303 13.5303C15.5013 13.5594 15.4727 13.588 15.4445 13.6163C14.9844 14.0771 14.6282 14.4339 14.221 14.6357C13.4516 15.0169 12.5484 15.0169 11.779 14.6357C11.3718 14.4339 11.0156 14.0771 10.5555 13.6163C10.5273 13.588 10.4987 13.5594 10.4697 13.5303C9.88157 12.9423 9.71099 12.7857 9.55498 12.7084C9.20526 12.5351 8.79467 12.5351 8.44496 12.7084C8.28895 12.7857 8.11837 12.9423 7.53028 13.5303L3.53033 17.5303C3.23744 17.8232 2.76256 17.8232 2.46967 17.5303C2.17678 17.2374 2.17678 16.7625 2.46967 16.4696L6.46962 12.4697C6.49865 12.4407 6.52726 12.412 6.55547 12.3837C7.01556 11.9229 7.37172 11.5662 7.77895 11.3644C8.54832 10.9831 9.45162 10.9831 10.221 11.3644C10.6282 11.5662 10.9844 11.9229 11.4445 12.3838C11.4727 12.412 11.5013 12.4407 11.5303 12.4697C12.1184 13.0578 12.289 13.2143 12.445 13.2916C12.7947 13.4649 13.2053 13.4649 13.555 13.2916C13.711 13.2143 13.8816 13.0578 14.4697 12.4697L19.1893 7.75003H15C14.5858 7.75003 14.25 7.41424 14.25 7.00003Z"></path>
                                </svg>
                            </Link>
                        </li>
                        <li className="hide-from-mobile " id="latest_menu_" onClick={() => { setAddActive("latest_menu_") }}>
                            <Link to="/home2/" data-load="?link1=videos&amp;page=latest" >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" fill="currentColor" d="M10 3.25L9.94358 3.25L9.94356 3.25C8.10581 3.24999 6.65019 3.24997 5.51098 3.40314C4.33855 3.56077 3.38961 3.89288 2.64124 4.64125C1.89288 5.38961 1.56076 6.33856 1.40313 7.51098C1.24997 8.65019 1.24998 10.1058 1.25 11.9436L1.25 11.9436L1.25 12L1.25 12.0564L1.25 12.0565C1.24998 13.8942 1.24997 15.3498 1.40313 16.489C1.56076 17.6614 1.89288 18.6104 2.64124 19.3588C3.38961 20.1071 4.33855 20.4392 5.51098 20.5969C6.65019 20.75 8.10583 20.75 9.94359 20.75L10 20.75L10.0564 20.75L10.0565 20.75C11.8942 20.75 13.3498 20.75 14.489 20.5969C15.6614 20.4392 16.6104 20.1071 17.3588 19.3588C18.1071 18.6104 18.4392 17.6614 18.5969 16.489C18.6011 16.4577 18.6052 16.4261 18.6092 16.3943C19.1758 16.8183 19.6658 17.1765 20.0818 17.4026C20.5551 17.6598 21.1632 17.875 21.7826 17.5653C22.402 17.2556 22.5947 16.64 22.673 16.107C22.7501 15.5813 22.75 14.8815 22.75 14.0604L22.75 14L22.75 9.99999L22.75 9.93961C22.75 9.11853 22.7501 8.41864 22.673 7.893C22.5947 7.35998 22.402 6.74439 21.7826 6.4347C21.1632 6.12501 20.5551 6.34019 20.0818 6.59743C19.6658 6.82352 19.1758 7.18169 18.6092 7.60572C18.6052 7.5739 18.6011 7.54232 18.5969 7.51098C18.4392 6.33856 18.1071 5.38961 17.3588 4.64125C16.6104 3.89288 15.6614 3.56077 14.489 3.40314C13.3498 3.24997 11.8942 3.24999 10.0564 3.25L10.0564 3.25L10 3.25ZM18.75 11.8488L18.75 11.8418L18.75 11.8335L18.75 11.8251L18.75 11.8168L18.75 11.8084L18.75 11.8L18.75 11.7917L18.75 11.7833L18.75 11.7749L18.75 11.7666L18.75 11.7582L18.75 11.7498L18.75 11.7414L18.75 11.733L18.75 11.7246L18.75 11.7162L18.75 11.7078L18.75 11.6994L18.75 11.691L18.75 11.6825L18.75 11.6741L18.75 11.6657L18.75 11.6573L18.75 11.6488L18.75 11.6404L18.75 11.632L18.75 11.6235L18.75 11.6151L18.75 11.6066L18.75 11.5982L18.75 11.5897L18.75 11.5813L18.75 11.5728L18.75 11.5643L18.75 11.5559L18.75 11.5474L18.75 11.5389L18.75 11.5304L18.75 11.522L18.75 11.5135L18.75 11.505L18.75 11.4965L18.75 11.488L18.75 11.4795L18.75 11.471L18.75 11.4625L18.75 11.454L18.75 11.4455L18.75 11.437L18.75 11.4285L18.75 11.4199L18.75 11.4114L18.75 11.4029L18.75 11.3944L18.75 11.3858L18.75 11.3773L18.75 11.3688L18.75 11.3602L18.75 11.3517L18.75 11.3432L18.75 11.3346L18.75 11.3261L18.75 11.3175L18.75 11.309L18.75 11.3004L18.75 11.2919L18.75 11.2833L18.75 11.2748L18.75 11.2662L18.75 11.2576L18.75 11.2491L18.75 11.2405L18.75 11.2319L18.75 11.2234L18.75 11.2148L18.75 11.2062L18.75 11.1976L18.75 11.1891L18.75 11.1805L18.75 11.1719L18.75 11.1633L18.75 11.1547L18.75 11.1461L18.75 11.1375L18.75 11.1289L18.75 11.1203L18.75 11.1117L18.75 11.1032L18.75 11.0946L18.75 11.086L18.75 11.0773L18.75 11.0687L18.75 11.0601L18.75 11.0515L18.75 11.0429L18.75 11.0343L18.75 11.0257L18.75 11.0171L18.75 11.0085L18.75 10.9999L18.75 10.9912L18.75 10.9826L18.75 10.974L18.75 10.9654L18.75 10.9568L18.75 10.9481L18.75 10.9395L18.75 10.9309L18.75 10.9223L18.75 10.9137L18.75 10.905L18.75 10.8964L18.75 10.8878L18.75 10.8791L18.75 10.8705L18.75 10.8619L18.75 10.8532L18.75 10.8446L18.75 10.836L18.75 10.8273L18.75 10.8187L18.75 10.8101L18.75 10.8014L18.75 10.7928L18.75 10.7842L18.75 10.7755L18.75 10.7669L18.75 10.7583L18.75 10.7496L18.75 10.741L18.75 10.7323L18.75 10.7237L18.75 10.7151L18.75 10.7064L18.75 10.6978L18.75 10.6891L18.75 10.6805L18.75 10.6719L18.75 10.6632L18.75 10.6546L18.75 10.6459L18.75 10.6373L18.75 10.6286L18.75 10.62L18.75 10.6114L18.75 10.6027L18.75 10.5941L18.75 10.5854L18.75 10.5768L18.75 10.5682L18.75 10.5595L18.75 10.5509L18.75 10.5422L18.75 10.5336L18.75 10.525L18.75 10.5163L18.75 10.5077L18.75 10.4991L18.75 10.4904L18.75 10.4818L18.75 10.4731L18.75 10.4645L18.75 10.4559L18.75 10.4472L18.75 10.4386L18.75 10.43L18.75 10.4213L18.75 10.4127L18.75 10.4041L18.75 10.3955L18.75 10.3868L18.75 10.3782L18.75 10.3696L18.75 10.361L18.75 10.3523L18.75 10.3437L18.75 10.3351L18.75 10.3265L18.75 10.3178L18.75 10.3092L18.75 10.3006L18.75 10.292L18.75 10.2834L18.75 10.2748L18.75 10.2661L18.75 10.2575L18.75 10.2489L18.75 10.2403L18.75 10.2317L18.75 10.2231L18.75 10.2145L18.75 10.2059L18.75 10.1973L18.75 10.1887L18.75 10.1801L18.75 10.1715L18.75 10.1629L18.75 10.1543L18.75 10.1457L18.75 10.1371L18.75 10.1285L18.75 10.12L18.75 10.1114L18.75 10.1028L18.75 10.0942L18.75 10.0856L18.75 10.0771L18.75 10.0685L18.75 10.0599L18.75 10.0513L18.75 10.0428L18.75 10.0342L18.75 10.0256L18.75 10.0171L18.75 10.0085L18.75 9.99996C18.75 9.74167 18.7507 9.59613 18.7603 9.48769C18.7646 9.43923 18.7696 9.41311 18.7728 9.39999C18.7744 9.3938 18.7754 9.39062 18.7758 9.38956L18.7764 9.3882L18.7771 9.38693C18.7778 9.38599 18.7797 9.38321 18.7837 9.37828C18.7922 9.36782 18.8101 9.34811 18.8463 9.31561C18.9273 9.24286 19.0433 9.15498 19.25 9C19.9685 8.46106 20.4399 8.11002 20.798 7.91537C20.9675 7.82328 21.0616 7.79413 21.1071 7.78583C21.1277 7.82716 21.1608 7.91996 21.1888 8.11077C21.248 8.51408 21.25 9.10178 21.25 9.99999L21.25 14C21.25 14.8982 21.248 15.4859 21.1888 15.8892C21.1608 16.08 21.1277 16.1728 21.1071 16.2141C21.0616 16.2058 20.9675 16.1767 20.798 16.0846C20.4399 15.89 19.9686 15.5389 19.25 15C19.0434 14.845 18.9273 14.7572 18.8463 14.6844C18.8101 14.6519 18.7922 14.6322 18.7837 14.6217C18.7817 14.6193 18.7803 14.6175 18.7792 14.616C18.7781 14.6145 18.7775 14.6136 18.7771 14.6131L18.7764 14.6118L18.7758 14.6104C18.7754 14.6093 18.7743 14.6061 18.7728 14.6C18.7696 14.5869 18.7646 14.5608 18.7603 14.5125C18.7507 14.4043 18.75 14.2591 18.75 14.0012L18.75 13.9954L18.75 13.9896L18.75 13.9838L18.75 13.978L18.75 13.9722L18.75 13.9664L18.75 13.9606L18.75 13.9547L18.75 13.9489L18.75 13.943L18.75 13.9371L18.75 13.9312L18.75 13.9253L18.75 13.9193L18.75 13.9134L18.75 13.9075L18.75 13.9015L18.75 13.8955L18.75 13.8895L18.75 13.8835L18.75 13.8775L18.75 13.8715L18.75 13.8654L18.75 13.8594L18.75 13.8533L18.75 13.8472L18.75 13.8411L18.75 13.835L18.75 13.8289L18.75 13.8228L18.75 13.8166L18.75 13.8105L18.75 13.8043L18.75 13.7981L18.75 13.792L18.75 13.7857L18.75 13.7795L18.75 13.7733L18.75 13.7671L18.75 13.7608L18.75 13.7546L18.75 13.7483L18.75 13.742L18.75 13.7357L18.75 13.7294L18.75 13.7231L18.75 13.7167L18.75 13.7104L18.75 13.704L18.75 13.6977L18.75 13.6913L18.75 13.6849L18.75 13.6785L18.75 13.6721L18.75 13.6656L18.75 13.6592L18.75 13.6527L18.75 13.6463L18.75 13.6398L18.75 13.6333L18.75 13.6268L18.75 13.6203L18.75 13.6138L18.75 13.6073L18.75 13.6007L18.75 13.5942L18.75 13.5876L18.75 13.581L18.75 13.5744L18.75 13.5678L18.75 13.5612L18.75 13.5546L18.75 13.548L18.75 13.5413L18.75 13.5347L18.75 13.528L18.75 13.5214L18.75 13.5147L18.75 13.508L18.75 13.5013L18.75 13.4945L18.75 13.4878L18.75 13.4811L18.75 13.4743L18.75 13.4676L18.75 13.4608L18.75 13.454L18.75 13.4472L18.75 13.4404L18.75 13.4336L18.75 13.4268L18.75 13.4199L18.75 13.4131L18.75 13.4062L18.75 13.3994L18.75 13.3925L18.75 13.3856L18.75 13.3787L18.75 13.3718L18.75 13.3649L18.75 13.358L18.75 13.351L18.75 13.3441L18.75 13.3371L18.75 13.3301L18.75 13.3232L18.75 13.3162L18.75 13.3092L18.75 13.3022L18.75 13.2952L18.75 13.2881L18.75 13.2811L18.75 13.274L18.75 13.267L18.75 13.2599L18.75 13.2528L18.75 13.2458L18.75 13.2387L18.75 13.2315L18.75 13.2244L18.75 13.2173L18.75 13.2102L18.75 13.203L18.75 13.1959L18.75 13.1887L18.75 13.1815L18.75 13.1744L18.75 13.1672L18.75 13.16L18.75 13.1528L18.75 13.1455L18.75 13.1383L18.75 13.1311L18.75 13.1238L18.75 13.1166L18.75 13.1093L18.75 13.102L18.75 13.0947L18.75 13.0874L18.75 13.0801L18.75 13.0728L18.75 13.0655L18.75 13.0582L18.75 13.0508L18.75 13.0435L18.75 13.0361L18.75 13.0288L18.75 13.0214L18.75 13.014L18.75 13.0066L18.75 12.9992L18.75 12.9918L18.75 12.9844L18.75 12.977L18.75 12.9696L18.75 12.9621L18.75 12.9547L18.75 12.9472L18.75 12.9397L18.75 12.9323L18.75 12.9248L18.75 12.9173L18.75 12.9098L18.75 12.9023L18.75 12.8948L18.75 12.8872L18.75 12.8797L18.75 12.8722L18.75 12.8646L18.75 12.857L18.75 12.8495L18.75 12.8419L18.75 12.8343L18.75 12.8267L18.75 12.8191L18.75 12.8115L18.75 12.8039L18.75 12.7963L18.75 12.7887L18.75 12.781L18.75 12.7734L18.75 12.7657L18.75 12.7581L18.75 12.7504L18.75 12.7427L18.75 12.735L18.75 12.7273L18.75 12.7196L18.75 12.7119L18.75 12.7042L18.75 12.6965L18.75 12.6888L18.75 12.681L18.75 12.6733L18.75 12.6655L18.75 12.6578L18.75 12.65L18.75 12.6422L18.75 12.6345L18.75 12.6267L18.75 12.6189L18.75 12.6111L18.75 12.6033L18.75 12.5955L18.75 12.5876L18.75 12.5798L18.75 12.572L18.75 12.5641L18.75 12.5563L18.75 12.5484L18.75 12.5405L18.75 12.5327L18.75 12.5248L18.75 12.5169L18.75 12.509L18.75 12.5011L18.75 12.4932L18.75 12.4853L18.75 12.4774L18.75 12.4695L18.75 12.4615L18.75 12.4536L18.75 12.4456L18.75 12.4377L18.75 12.4297L18.75 12.4218L18.75 12.4138L18.75 12.4058L18.75 12.3978L18.75 12.3899L18.75 12.3819L18.75 12.3739L18.75 12.3659L18.75 12.3578L18.75 12.3498L18.75 12.3418L18.75 12.3338L18.75 12.3257L18.75 12.3177L18.75 12.3096L18.75 12.3016L18.75 12.2935L18.75 12.2854L18.75 12.2774L18.75 12.2693L18.75 12.2612L18.75 12.2531L18.75 12.245L18.75 12.2369L18.75 12.2288L18.75 12.2207L18.75 12.2126L18.75 12.2044L18.75 12.1963L18.75 12.1882L18.75 12.18L18.75 12.1719L18.75 12.1637L18.75 12.1556L18.75 12.1512M17.25 12C17.25 13.9068 17.2484 15.2615 17.1102 16.2892C16.975 17.2952 16.7213 17.8749 16.2981 18.2981C15.8749 18.7213 15.2952 18.975 14.2892 19.1102C13.2615 19.2484 11.9068 19.25 10 19.25C8.09318 19.25 6.73851 19.2484 5.71085 19.1102C4.70476 18.975 4.12511 18.7213 3.7019 18.2981C3.27869 17.8749 3.02502 17.2952 2.88976 16.2892C2.75159 15.2615 2.75 13.9068 2.75 12C2.75 10.0932 2.75159 8.73852 2.88976 7.71085C3.02502 6.70476 3.27869 6.12512 3.7019 5.70191C4.12511 5.2787 4.70476 5.02503 5.71085 4.88976C6.73851 4.7516 8.09318 4.75 10 4.75C11.9068 4.75 13.2615 4.7516 14.2892 4.88976C15.2952 5.02503 15.8749 5.2787 16.2981 5.70191C16.7213 6.12512 16.975 6.70476 17.1102 7.71085C17.2484 8.73852 17.25 10.0932 17.25 12ZM21.1422 7.78417C21.1418 7.78483 21.137 7.78511 21.129 7.783C21.1387 7.78245 21.1427 7.7835 21.1422 7.78417ZM21.0962 7.76658C21.0897 7.76146 21.087 7.75743 21.0873 7.7567C21.0876 7.75596 21.0908 7.75852 21.0962 7.76658ZM21.0873 16.2433C21.087 16.2425 21.0897 16.2385 21.0962 16.2334C21.0908 16.2414 21.0876 16.244 21.0873 16.2433ZM21.129 16.217C21.137 16.2148 21.1418 16.2151 21.1422 16.2158C21.1427 16.2165 21.1387 16.2175 21.129 16.217Z"></path>
                                </svg>
                            </Link>
                        </li>
                        <li className="hide-from-mobile " id="movies_menu_" onClick={() => { setAddActive("movies_menu_") }}>
                            <Link to="/home2/" data-load="?link1=movies">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" fill="currentColor" d="M9 2.25H8.94513C8.63161 2.25 8.33204 2.24999 8.04605 2.25139C8.03082 2.25047 8.01546 2.25 8 2.25C7.98169 2.25 7.96353 2.25066 7.94555 2.25195C7.02806 2.25763 6.25306 2.27983 5.60825 2.36652C4.70814 2.48754 3.95027 2.74643 3.34835 3.34835C2.74643 3.95027 2.48754 4.70814 2.36652 5.60825C2.31805 5.9688 2.28974 6.37005 2.2732 6.81417C2.25805 6.87359 2.25 6.93586 2.25 7C2.25 7.04818 2.25454 7.0953 2.26323 7.14096C2.24998 7.68236 2.24999 8.28262 2.25 8.94513V9V12V15V15.0549C2.24999 15.7174 2.24998 16.3176 2.26323 16.859C2.25454 16.9047 2.25 16.9518 2.25 17C2.25 17.0641 2.25805 17.1264 2.2732 17.1858C2.28974 17.6299 2.31805 18.0312 2.36652 18.3918C2.48754 19.2919 2.74643 20.0497 3.34835 20.6517C3.95027 21.2536 4.70814 21.5125 5.60825 21.6335C6.25306 21.7202 7.02806 21.7424 7.94555 21.7481C7.96353 21.7493 7.98169 21.75 8 21.75C8.01546 21.75 8.03082 21.7495 8.04605 21.7486C8.33204 21.75 8.63162 21.75 8.94513 21.75H9H15H15.0549C15.3684 21.75 15.668 21.75 15.9539 21.7486C15.9692 21.7495 15.9845 21.75 16 21.75C16.0183 21.75 16.0365 21.7493 16.0544 21.7481C16.9719 21.7424 17.7469 21.7202 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.6517 20.6517C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.682 18.0312 21.7103 17.6299 21.7268 17.1858C21.7419 17.1264 21.75 17.0641 21.75 17C21.75 16.9518 21.7455 16.9047 21.7368 16.8591C21.75 16.3177 21.75 15.7175 21.75 15.055V15.0549V15V12V9V8.94513V8.945V8.94486C21.75 8.28245 21.75 7.68228 21.7368 7.14095C21.7455 7.09529 21.75 7.04818 21.75 7C21.75 6.93586 21.7419 6.87359 21.7268 6.81417C21.7103 6.37006 21.682 5.9688 21.6335 5.60825C21.5125 4.70814 21.2536 3.95027 20.6517 3.34835C20.0497 2.74643 19.2919 2.48754 18.3918 2.36652C17.7469 2.27983 16.9719 2.25763 16.0544 2.25195C16.0365 2.25066 16.0183 2.25 16 2.25C15.9845 2.25 15.9692 2.25047 15.9539 2.25139C15.668 2.24999 15.3684 2.25 15.0549 2.25H15H9ZM3.80673 17.75C3.81924 17.9063 3.83451 18.0533 3.85315 18.1919C3.9518 18.9257 4.13225 19.3142 4.40901 19.591C4.68577 19.8678 5.07435 20.0482 5.80812 20.1469C6.2098 20.2009 6.68097 20.2266 7.25 20.2389V17.75H3.80673ZM7.25 16.25H3.75371C3.75016 15.8736 3.75 15.459 3.75 15V12.75H7.25V16.25ZM8.75 17V20.25L9 20.25H15L15.25 20.25V17V12.75H8.75V17ZM20.25 15C20.25 15.459 20.2498 15.8736 20.2463 16.25H16.75V12.75H20.25V15ZM20.1933 17.75H16.75V20.2389C17.319 20.2266 17.7902 20.2009 18.1919 20.1469C18.9257 20.0482 19.3142 19.8678 19.591 19.591C19.8678 19.3142 20.0482 18.9257 20.1469 18.1919C20.1655 18.0533 20.1808 17.9063 20.1933 17.75ZM20.1933 6.25C20.1808 6.09365 20.1655 5.94675 20.1469 5.80812C20.0482 5.07435 19.8678 4.68577 19.591 4.40901C19.3142 4.13225 18.9257 3.9518 18.1919 3.85315C17.7902 3.79914 17.319 3.77341 16.75 3.76115V6.25H20.1933ZM15.25 7V3.75004L15 3.75H9L8.75 3.75004V7V11.25H15.25V7ZM16.75 7.75H20.2463C20.2498 8.12636 20.25 8.54098 20.25 9V11.25H16.75V7.75ZM3.75 9C3.75 8.54098 3.75016 8.12636 3.75371 7.75H7.25V11.25H3.75V9ZM3.80673 6.25H7.25V3.76115C6.68097 3.77341 6.2098 3.79914 5.80812 3.85315C5.07435 3.9518 4.68577 4.13225 4.40901 4.40901C4.13225 4.68577 3.9518 5.07435 3.85315 5.80812C3.83451 5.94675 3.81924 6.09365 3.80673 6.25Z"></path>
                                </svg>
                            </Link>
                        </li>
                        <li className="hide-from-mobile " id="popular_channels_menu_" onClick={() => { setAddActive("popular_channels_menu_") }}>
                            <Link to="/home2/" data-load="?link1=popular_channels">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" fill="currentColor" d="M12 1.25C12.2841 1.25 12.5438 1.4105 12.6708 1.66459L15.5 7.32299L21.1233 8.2602C21.4004 8.30639 21.6285 8.50358 21.7142 8.77112C21.8 9.03866 21.729 9.33167 21.5304 9.53033L17.3243 13.7364L18.7308 19.8314C18.7961 20.1143 18.6922 20.4096 18.464 20.5893C18.2358 20.7689 17.9244 20.8007 17.6646 20.6708L12 17.8385L6.33543 20.6708C6.07566 20.8007 5.76425 20.7689 5.53606 20.5893C5.30787 20.4096 5.20392 20.1143 5.26923 19.8314L6.67576 13.7364L2.46969 9.53033C2.27104 9.33167 2.20006 9.03866 2.2858 8.77112C2.37154 8.50358 2.5996 8.30639 2.87672 8.2602L8.5 7.32299L11.3292 1.66459C11.4563 1.4105 11.7159 1.25 12 1.25ZM12 3.67705L9.67084 8.33541C9.56353 8.55003 9.36001 8.70035 9.12332 8.7398L4.56088 9.5002L8.03035 12.9697C8.2132 13.1525 8.28896 13.4167 8.23081 13.6686L7.08887 18.617L11.6646 16.3292C11.8758 16.2236 12.1243 16.2236 12.3354 16.3292L16.9112 18.617L15.7692 13.6686C15.7111 13.4167 15.7868 13.1525 15.9697 12.9697L19.4392 9.5002L14.8767 8.7398C14.64 8.70035 14.4365 8.55003 14.3292 8.33541L12 3.67705Z"></path>
                                </svg>
                            </Link>
                        </li>
                        <li className="hide-from-mobile " id="shorts_menu_" onClick={() => { setAddActive("shorts_menu_") }}>
                            <Link to="/home2/" data-load="?link1=shorts&amp;id=">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 168.071 168.071" >
                                    {/* <g>
                                    <g> */}
                                    <path opacity="0.5" fill="currentColor" d="M154.932,91.819L42.473,27.483c-2.219-1.26-4.93-1.26-7.121-0.027 c-2.219,1.233-3.588,3.533-3.615,6.026L31.08,161.059c0,0,0,0,0,0.027c0,2.465,1.369,4.766,3.533,6.026 c1.123,0.63,2.355,0.959,3.615,0.959c1.205,0,2.438-0.301,3.533-0.931l113.116-63.214c2.219-1.26,3.588-3.533,3.588-6.053 c0,0,0,0,0-0.027C158.465,95.38,157.123,93.079,154.932,91.819z"></path>
                                    {/* <g id="XMLID_15_">
                                            <g> */}
                                    <path fill="currentColor" d="M79.952,44.888L79.952,44.888c3.273-3.273,2.539-8.762-1.479-11.06l-7.288-4.171 c-2.75-1.572-6.212-1.109-8.452,1.128l0,0c-3.273,3.273-2.539,8.762,1.479,11.06l7.291,4.169 C74.25,47.589,77.712,47.126,79.952,44.888z"></path>
                                    <path fill="currentColor" d="M133.459,65.285L99.103,45.631c-2.75-1.572-6.209-1.109-8.449,1.128l0,0 c-3.273,3.273-2.539,8.759,1.479,11.057l23.497,13.44L23.931,122.5l0.52-103.393l19.172,10.964 c2.722,1.558,6.152,1.098,8.367-1.12l0.104-0.104c3.24-3.24,2.514-8.674-1.463-10.95L21,0.948 c-2.219-1.26-4.93-1.26-7.121-0.027c-2.219,1.233-3.588,3.533-3.615,6.026L9.607,134.524c0,0,0,0,0,0.027 c0,2.465,1.369,4.766,3.533,6.026c1.123,0.63,2.355,0.959,3.615,0.959c1.205,0,2.438-0.301,3.533-0.931l113.116-63.214 c2.219-1.26,3.588-3.533,3.588-6.053c0,0,0,0,0-0.027C136.992,68.845,135.65,66.545,133.459,65.285z"></path>
                                    {/* </g>
                                        </g>
                                    </g>
                                </g> */}
                                </svg>
                            </Link>
                        </li>
                    </ul>
                </animated.div >
                </div>
            </div>
    )
}

export default SideNavBar