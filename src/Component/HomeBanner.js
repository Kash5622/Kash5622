import React from 'react'

function HomeBanner() {
    const data = {
        name: "Dr David E. Martin",
        profilephoto: "https://clikview.com/upload/photos/2022/08/jAsf9cPGcB2VrdnkWMNG_17_51bb3f829fcfe61daca518480bb0a51b_image.png",
        profilelink: "/",
        followers: "273",
        heading: "Ways To Keep Yourself Safe",
        desc: "Ways To Keep Yourself Safe",
        category: "Advanced Medicine",
        date: "24/08/22",
        time: "2:20",
        videolink: "/",
        channellink: "/",
        facebook: "/",
        twiter: "/",
        linkedin: "/",
        painstar: "/",
        whatsapp: '/'
    }
    return (
        <>
            <div className='mainBanner'>
                <div className='bannerImgDiv'>
                    <img src={data.profilephoto} alt={data.name} className='bannerImg' />
                </div>
                <div className='pt_feat_vid_content'>
                    <div className='container-home' >
                        <div className='row '  >

                            <div className="col-xl-4 col-md-5 mobileHide">
                                <div className="pt_feat_vid_details">

                                    <h1>{data.heading}</h1>

                                    <p>{data.date}<span className="bold">·</span>{data.category}<span className="bold">·</span>{data.time}</p>

                                    <button className="btn btn-main mx-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M9.43727 4.31806C9.45382 4.3287 9.47042 4.33937 9.48708 4.35008L17.7886 9.68675L17.8359 9.71716C18.3845 10.0698 18.8657 10.3791 19.2025 10.6736C19.5588 10.9852 19.9007 11.4052 19.9007 12C19.9007 12.5948 19.5588 13.0148 19.2025 13.3264C18.8657 13.6209 18.3845 13.9302 17.8359 14.2828L17.7886 14.3132L9.48708 19.6499L9.43728 19.6819C8.79999 20.0917 8.25128 20.4445 7.79529 20.6505C7.32513 20.8629 6.73881 21.0195 6.16142 20.7043C5.58404 20.3891 5.39875 19.8112 5.32319 19.3008C5.24991 18.8059 5.24995 18.1535 5.25 17.3959L5.25 17.3367V6.66332C5.25 6.64352 5.25 6.62378 5.25 6.60411C5.24995 5.84646 5.24991 5.19413 5.32319 4.69916C5.39875 4.1888 5.58404 3.61089 6.16142 3.29566C6.73881 2.98044 7.32513 3.13709 7.79529 3.34951C8.25128 3.55553 8.79998 3.90831 9.43727 4.31806ZM6.85489 4.61985C6.85442 4.61922 6.85822 4.61792 6.86767 4.61784C6.86008 4.62044 6.85536 4.62048 6.85489 4.61985ZM6.88369 4.61862C6.9243 4.62242 7.01255 4.64186 7.1777 4.71647C7.52004 4.87114 7.97457 5.16097 8.67595 5.61185L16.9774 10.9485C17.5876 11.3408 17.9723 11.5904 18.2151 11.8028C18.33 11.9033 18.3772 11.9656 18.3953 11.9961C18.3961 11.9975 18.3969 11.9988 18.3975 12C18.3969 12.0012 18.3961 12.0025 18.3953 12.0039C18.3772 12.0343 18.33 12.0967 18.2151 12.1972C17.9723 12.4096 17.5876 12.6592 16.9774 13.0515L8.67595 18.3881C7.97457 18.839 7.52004 19.1288 7.1777 19.2835C7.01255 19.3581 6.9243 19.3776 6.88369 19.3814C6.86493 19.3451 6.83356 19.2604 6.80701 19.0811C6.752 18.7095 6.75 18.1705 6.75 17.3367V6.66332C6.75 5.82952 6.752 5.29045 6.80701 4.91884C6.83356 4.73958 6.86493 4.65483 6.88369 4.61862ZM6.85489 19.3801C6.85536 19.3795 6.86008 19.3795 6.86767 19.3821C6.85822 19.3821 6.85442 19.3808 6.85489 19.3801ZM6.8917 19.3953C6.89799 19.4002 6.90058 19.4042 6.9003 19.4049C6.90002 19.4057 6.89688 19.4032 6.8917 19.3953ZM6.8917 4.60472C6.89688 4.59681 6.90002 4.59432 6.9003 4.59506C6.90058 4.59579 6.89799 4.59975 6.8917 4.60472Z" fill="currentColor"></path></svg> Play</button>

                                    <button className="btn btn-main mx-1" ><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fillRule="evenodd" clipRule="evenodd" d="M7.97475 1.25H8H16H16.0252H16.0253C16.4697 1.24999 16.8408 1.24999 17.1454 1.27077C17.4625 1.29241 17.762 1.33905 18.0524 1.45933C18.7262 1.73844 19.2616 2.27379 19.5407 2.94762C19.661 3.23801 19.7076 3.53754 19.7292 3.85464C19.7407 4.02346 19.7459 4.21269 19.7482 4.42352C20.4935 4.56362 21.1309 4.82762 21.6517 5.34835C22.2536 5.95027 22.5125 6.70814 22.6335 7.60825C22.75 8.47522 22.75 9.57754 22.75 10.9451V11V13V13.0549C22.75 14.4225 22.75 15.5248 22.6335 16.3918C22.5125 17.2919 22.2536 18.0497 21.6517 18.6517C21.1309 19.1724 20.4935 19.4364 19.7482 19.5765C19.7459 19.7873 19.7407 19.9765 19.7292 20.1454C19.7076 20.4625 19.661 20.762 19.5407 21.0524C19.2616 21.7262 18.7262 22.2616 18.0524 22.5407C17.762 22.661 17.4625 22.7076 17.1454 22.7292C16.8408 22.75 16.4697 22.75 16.0253 22.75H16H8H7.97474C7.53028 22.75 7.15925 22.75 6.85464 22.7292C6.53754 22.7076 6.23801 22.661 5.94762 22.5407C5.27379 22.2616 4.73844 21.7262 4.45933 21.0524C4.33905 20.762 4.29241 20.4625 4.27077 20.1454C4.25925 19.9765 4.25412 19.7873 4.25183 19.5765C3.50654 19.4364 2.86908 19.1724 2.34835 18.6517C1.74643 18.0497 1.48754 17.2919 1.36652 16.3918C1.24996 15.5248 1.24998 14.4225 1.25 13.0549V13V11V10.9451C1.24998 9.57754 1.24996 8.47522 1.36652 7.60825C1.48754 6.70814 1.74643 5.95027 2.34835 5.34835C2.86908 4.82762 3.50654 4.56362 4.25183 4.42352C4.25412 4.21269 4.25925 4.02346 4.27077 3.85464C4.29241 3.53754 4.33905 3.23801 4.45933 2.94762C4.73844 2.27379 5.27379 1.73844 5.94762 1.45933C6.23801 1.33905 6.53754 1.29241 6.85464 1.27077C7.15924 1.24999 7.53028 1.24999 7.97473 1.25H7.97475ZM18.2327 3.95674C18.2391 4.05098 18.2432 4.15569 18.2457 4.27551C17.6075 4.24998 16.8794 4.24999 16.0549 4.25L16 4.25H8L7.94513 4.25C7.12061 4.24999 6.39251 4.24998 5.75428 4.27551C5.75682 4.15569 5.76086 4.05098 5.76729 3.95674C5.78372 3.71602 5.81319 3.5988 5.84515 3.52165C5.97202 3.21536 6.21536 2.97202 6.52165 2.84515C6.5988 2.81319 6.71602 2.78372 6.95674 2.76729C7.20421 2.75041 7.5238 2.75 8 2.75L16 2.75C16.4762 2.75 16.7958 2.75041 17.0433 2.76729C17.284 2.78372 17.4012 2.81319 17.4784 2.84515C17.7846 2.97202 18.028 3.21536 18.1549 3.52165C18.1868 3.5988 18.2163 3.71602 18.2327 3.95674ZM18.2457 19.7245C17.6075 19.75 16.8794 19.75 16.0549 19.75H16H8H7.94513C7.12061 19.75 6.39252 19.75 5.75428 19.7245C5.75682 19.8443 5.76086 19.949 5.76729 20.0433C5.78372 20.284 5.81319 20.4012 5.84515 20.4784C5.97202 20.7846 6.21536 21.028 6.52165 21.1549C6.5988 21.1868 6.71602 21.2163 6.95674 21.2327C7.20421 21.2496 7.5238 21.25 8 21.25H16C16.4762 21.25 16.7958 21.2496 17.0433 21.2327C17.284 21.2163 17.4012 21.1868 17.4784 21.1549C17.7846 21.028 18.028 20.7846 18.1549 20.4784C18.1868 20.4012 18.2163 20.284 18.2327 20.0433C18.2391 19.949 18.2432 19.8443 18.2457 19.7245ZM3.40901 6.40901C3.68577 6.13225 4.07435 5.9518 4.80812 5.85315C5.56347 5.75159 6.56458 5.75 8 5.75H16C17.4354 5.75 18.4365 5.75159 19.1919 5.85315C19.9257 5.9518 20.3142 6.13225 20.591 6.40901C20.8678 6.68577 21.0482 7.07435 21.1469 7.80812C21.2484 8.56347 21.25 9.56458 21.25 11V13C21.25 14.4354 21.2484 15.4365 21.1469 16.1919C21.0482 16.9257 20.8678 17.3142 20.591 17.591C20.3142 17.8678 19.9257 18.0482 19.1919 18.1469C18.4365 18.2484 17.4354 18.25 16 18.25H8C6.56458 18.25 5.56347 18.2484 4.80812 18.1469C4.07435 18.0482 3.68577 17.8678 3.40901 17.591C3.13225 17.3142 2.9518 16.9257 2.85315 16.1919C2.75159 15.4365 2.75 14.4354 2.75 13V11C2.75 9.56458 2.75159 8.56347 2.85315 7.80812C2.9518 7.07435 3.13225 6.68577 3.40901 6.40901ZM13.5254 9.4489L13.4759 9.41588C12.8339 8.98785 12.2825 8.62015 11.8238 8.40354C11.3527 8.181 10.7611 8.0115 10.1742 8.32559C9.58737 8.63968 9.40028 9.22588 9.32408 9.74137C9.24991 10.2431 9.24995 10.9059 9.25 11.6775L9.25 11.737V12.263L9.25 12.3225C9.24995 13.0941 9.24991 13.7569 9.32408 14.2586C9.40028 14.7741 9.58737 15.3603 10.1742 15.6744C10.7611 15.9885 11.3527 15.819 11.8238 15.5965C12.2825 15.3799 12.8339 15.0122 13.4759 14.5841L13.4759 14.5841L13.5254 14.5511L13.9199 14.2881L13.966 14.2574L13.966 14.2574C14.4909 13.9075 14.953 13.5995 15.2767 13.307C15.6209 12.996 15.9472 12.581 15.9472 12C15.9472 11.419 15.6209 11.004 15.2767 10.693C14.953 10.4005 14.4909 10.0925 13.966 9.74263L13.9199 9.71186L13.5254 9.4489ZM10.8556 9.65578C10.8552 9.65513 10.859 9.65389 10.8685 9.65395C10.8608 9.65645 10.8561 9.65642 10.8556 9.65578ZM11.1833 9.75987C11.0171 9.68139 10.9275 9.65985 10.8858 9.65511C10.8666 9.69243 10.8348 9.77893 10.808 9.96073C10.752 10.3393 10.75 10.889 10.75 11.737V12.263C10.75 13.111 10.752 13.6607 10.808 14.0393C10.8348 14.2211 10.8666 14.3076 10.8858 14.3449C10.9275 14.3402 11.0171 14.3186 11.1833 14.2401C11.5293 14.0767 11.9878 13.7734 12.6934 13.303L13.0878 13.0401C13.6729 12.65 14.0397 12.4031 14.271 12.1941C14.3802 12.0954 14.4247 12.0347 14.4418 12.0052L14.4446 12L14.4418 11.9948C14.4247 11.9653 14.3802 11.9046 14.271 11.8059C14.0397 11.5969 13.6729 11.35 13.0878 10.9599L12.6934 10.697C11.9878 10.2266 11.5293 9.9233 11.1833 9.75987ZM10.8556 14.3442C10.8561 14.3436 10.8608 14.3435 10.8685 14.346C10.859 14.3461 10.8552 14.3449 10.8556 14.3442ZM10.8944 14.3599C10.9007 14.3649 10.9034 14.3689 10.9031 14.3696C10.9028 14.3704 10.8996 14.3679 10.8944 14.3599ZM10.8944 9.64011C10.8996 9.63215 10.9028 9.62964 10.9031 9.63038C10.9034 9.63111 10.9007 9.63509 10.8944 9.64011Z" fill="currentColor"></path></svg>Channel</button>

                                </div>

                            </div>
                            <div className="col-xl-3 col-md-7 offset-xl-5 profileCard">

                                <div className="video-title">

                                    <div className="publisher-element">

                                        <div className="publisher-avatar pull-left">

                                            <a href="https://clikview.com/@Drmartin" data-load="?link1=timeline&amp;id=Drmartin"><img src="https://clikview.com/upload/photos/2022/08/Jxy29ew6njU7GPAOLAbo_19_8e4340d3d78dd8a907c31b09be80a8c8_image.png" alt="Dr David E. Martin" /></a>

                                        </div>

                                        <div className="publisher-name">

                                            <a href="https://clikview.com/@Drmartin" data-load="?link1=timeline&amp;id=Drmartin">Dr David E. Martin</a>

                                            <div className="publisher-subscribe-button"><button className="btn-subscribe subscribe-id-11" data-id="11" onClick="PT_Subscribe(11, 'subscribe')">Subscribe</button><span className="subs-amount">276</span></div>

                                        </div>

                                        <div className="clear"></div>

                                    </div>

                                    <hr />

                                    <div className="video-big-title" Style="height:12rem;">

                                        <a href="https://clikview.com/watch/ways-to-keep-yourself-safe_TXel3u8unsnv1qc.html" data-load="?link1=watch&amp;id=ways-to-keep-yourself-safe_TXel3u8unsnv1qc.html">Ways To Keep Yourself Safe</a>

                                        <p> Ways To Keep Yourself Safe</p>

                                    </div>

                                    <div className="clear"></div>

                                    <div className="video-big-share">

                                        <span className="btn pointer" data-toggle="modal" Style="display:inherit" data-target="#share_box"><svg width="19" height="19" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19.333 14.667a4.66 4.66 0 00-3.839 2.024l-6.509-2.939a4.574 4.574 0 00.005-3.488l6.5-2.954a4.66 4.66 0 10-.827-2.643 4.633 4.633 0 00.08.786l-6.91 3.14a4.668 4.668 0 10-.015 6.827l6.928 3.128a4.736 4.736 0 00-.079.785 4.667 4.667 0 104.666-4.666zm0-12.667a2.667 2.667 0 11-2.666 2.667A2.669 2.669 0 0119.333 2zM4.667 14.667A2.667 2.667 0 117.333 12a2.67 2.67 0 01-2.666 2.667zM19.333 22A2.667 2.667 0 1122 19.333 2.669 2.669 0 0119.333 22z"></path></svg>&nbsp;Share</span>

                                        <span><a onClick="window.open('https://www.facebook.com/sharer/sharer.php?u=https://clikview.com/watch/ways-to-keep-yourself-safe_TXel3u8unsnv1qc.html', 'newwindow', 'width=700,height=550'); return false;" href="https://www.facebook.com/sharer/sharer.php?u=https://clikview.com/watch/ways-to-keep-yourself-safe_TXel3u8unsnv1qc.html"><i className="fa fa-facebook"></i></a></span>

                                        <span><a onClick="window.open('https://twitter.com/intent/tweet?url=https://clikview.com/watch/ways-to-keep-yourself-safe_TXel3u8unsnv1qc.html', 'newwindow', 'width=700,height=550'); return false;" href="https://twitter.com/intent/tweet?url=https://clikview.com/watch/ways-to-keep-yourself-safe_TXel3u8unsnv1qc.html"><i className="fa fa-twitter"></i></a></span>

                                        <span><a onClick="window.open('https://www.linkedin.com/shareArticle?mini=true&amp;url=https://clikview.com/watch/ways-to-keep-yourself-safe_TXel3u8unsnv1qc.html&amp;title=Ways To Keep Yourself Safe', 'newwindow', 'width=700,height=550'); return false;" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://clikview.com/watch/ways-to-keep-yourself-safe_TXel3u8unsnv1qc.html&amp;title=Ways To Keep Yourself Safe"><i className="fa fa-linkedin"></i></a></span>

                                        <span><a onClick="window.open('https://pinterest.com/pin/create/button/?url=https://clikview.com/watch/ways-to-keep-yourself-safe_TXel3u8unsnv1qc.html&amp;media=https://clikview.com/upload/photos/2022/08/cmTGAb4wCde4XKKRU3Jv_24_db98bc03a816c866a90bc9c37d4c40b2_image.png', 'newwindow', 'width=700,height=550'); return false;" href="https://pinterest.com/pin/create/button/?url=https://clikview.com/watch/ways-to-keep-yourself-safe_TXel3u8unsnv1qc.html&amp;media=https://clikview.com/upload/photos/2022/08/cmTGAb4wCde4XKKRU3Jv_24_db98bc03a816c866a90bc9c37d4c40b2_image.png"><i className="fa fa-pinterest"></i></a></span>

                                        <span><a href="https://api.whatsapp.com/send?text=https://clikview.com/watch/ways-to-keep-yourself-safe_TXel3u8unsnv1qc.html"><i className="fa fa-whatsapp"></i></a></span>

                                    </div>

                                    <div className="video-big-share">

                                        <span className="btn pointer" onClick="location.href = 'https://clikview.com/auction';"> Participate</span>



                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeBanner;