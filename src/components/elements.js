import React from 'react'
import '../styles/global.scss'

const ElementsTime = () => {
    return (
        <div className="elements-wrapper">
        <svg id="elements-time" className="elements" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle className="elements-time-bg" cx="90" cy="90" r="90" />
        </svg>
        </div>
    )
}
  
const ElementsImpact = () => {
    return (
        <div className="elements-wrapper">
        <svg id="elements-impact" className="elements" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle className="elements-impact-bg" cx="90" cy="90" r="90" />
            <rect className="elements-impact-rect order-first" x="45" y="45" rx="2" />
            <rect className="elements-impact-rect order-second" x="77" y="45" rx="2" />
            <rect className="elements-impact-rect order-third" x="109" y="45" rx="2" />
            <path className="elements-impact-arrow" fill-rule="evenodd" clip-rule="evenodd" d="M14.8931 32.025L30.887 25.4001C32.9285 24.5545 33.8976 22.2136 33.0512 20.1724L26.4204 4.18235C25.5672 2.12479 22.6521 2.12619 21.8009 4.18456L19.1002 10.7148C18.9521 11.073 18.5415 11.2432 18.1834 11.0949L10.3241 7.83945C7.50483 6.67168 4.27271 8.01047 3.10493 10.8297C1.93716 13.649 3.27595 16.8811 6.0952 18.0489L14.111 21.3691C14.3828 21.4817 14.5118 21.7932 14.3993 22.065L11.6267 28.7586C10.7743 30.8163 12.8353 32.8774 14.8931 32.025Z" />
        </svg>
        </div>
    )
}
  
const ElementsPractical = () => {
    return (
        <div className="elements-wrapper">
        <svg id="elements-practical" className="elements" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle className="elements-practical-bg" cx="90" cy="90" r="90" />
            {/* <svg className="elements-practical-gears" x="43" y="51" width="43" height="43" viewBox="0 0 43 43" opacity="0.8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.6779 24.6505C25.2933 23.295 25.504 20.8867 24.1485 19.2713C22.7931 17.6559 20.3847 17.4452 18.7694 18.8007C17.154 20.1562 16.9433 22.5645 18.2988 24.1799C19.6542 25.7953 22.0626 26.006 23.6779 24.6505Z" />
                <path d="M30.8927 18.5966C31.0096 18.9996 31.2446 19.3583 31.5674 19.6264C31.8901 19.8946 32.2858 20.0599 32.7033 20.1011L32.8109 20.1105C33.1442 20.1394 33.4685 20.2338 33.7652 20.3882C34.062 20.5426 34.3254 20.7539 34.5404 21.0102C34.7554 21.2664 34.9178 21.5626 35.0183 21.8816C35.1188 22.2007 35.1555 22.5364 35.1261 22.8696C35.0972 23.2029 35.0028 23.5272 34.8484 23.8239C34.694 24.1207 34.4827 24.3841 34.2264 24.5991C33.9702 24.8141 33.6741 24.9765 33.355 25.077C33.0359 25.1776 32.7002 25.2142 32.367 25.1848L32.2594 25.1754C31.841 25.1435 31.4227 25.2376 31.0583 25.4456C30.6939 25.6537 30.4002 25.9661 30.215 26.3426C30.0303 26.7082 29.9566 27.1197 30.0028 27.5267C30.0491 27.9336 30.2133 28.3181 30.4753 28.6329L30.6144 28.7987C31.0484 29.3158 31.2591 29.9842 31.2003 30.6567C31.1414 31.3292 30.8178 31.9508 30.3007 32.3848C29.7835 32.8187 29.1152 33.0294 28.4426 32.9706C27.7701 32.9118 27.1485 32.5882 26.7146 32.071L26.6409 31.9833C26.3626 31.6669 25.9955 31.4416 25.5874 31.3366C25.1793 31.2316 24.7491 31.2518 24.3526 31.3946C23.9497 31.5116 23.591 31.7466 23.3228 32.0693C23.0547 32.3921 22.8894 32.7877 22.8482 33.2053L22.8388 33.3129C22.8098 33.6461 22.7154 33.9704 22.561 34.2672C22.4067 34.5639 22.1953 34.8273 21.9391 35.0424C21.6828 35.2574 21.3867 35.4198 21.0676 35.5203C20.7486 35.6208 20.4128 35.6574 20.0796 35.6281C19.7464 35.5991 19.4221 35.5047 19.1253 35.3504C18.8286 35.196 18.5651 34.9846 18.3501 34.7284C18.1351 34.4721 17.9727 34.176 17.8722 33.8569C17.7717 33.5379 17.7351 33.2021 17.7644 32.8689L17.7738 32.7613C17.8058 32.343 17.7117 31.9246 17.5036 31.5602C17.2956 31.1958 16.9832 30.9021 16.6066 30.7169C16.2411 30.5323 15.8295 30.4585 15.4226 30.5048C15.0156 30.551 14.6311 30.7153 14.3163 30.9773L14.1506 31.1164C13.6334 31.5503 12.9651 31.761 12.2926 31.7022C11.62 31.6434 10.9984 31.3198 10.5645 30.8026C10.1305 30.2855 9.9198 29.6171 9.97864 28.9446C10.0375 28.2721 10.3611 27.6504 10.8782 27.2165L10.966 27.1429C11.2823 26.8645 11.5077 26.4975 11.6126 26.0894C11.7176 25.6813 11.6974 25.251 11.5546 24.8546C11.4377 24.4516 11.2027 24.0929 10.8799 23.8248C10.5572 23.5566 10.1615 23.3913 9.74395 23.3501L9.63637 23.3407C9.30312 23.3117 8.97884 23.2174 8.68208 23.063C8.38532 22.9086 8.1219 22.6973 7.90688 22.441C7.69186 22.1848 7.52946 21.8886 7.42896 21.5696C7.32845 21.2505 7.29183 20.9148 7.32117 20.5816C7.35014 20.2483 7.44451 19.924 7.59889 19.6273C7.75326 19.3305 7.96462 19.0671 8.22087 18.8521C8.47712 18.637 8.77324 18.4746 9.0923 18.3741C9.41136 18.2736 9.7471 18.237 10.0803 18.2664L10.1879 18.2758C10.6063 18.3077 11.0246 18.2136 11.389 18.0056C11.7534 17.7975 12.0471 17.4851 12.2323 17.1086L12.3103 17.0431C12.495 16.6776 12.5687 16.266 12.5225 15.8591C12.4762 15.4521 12.312 15.0676 12.05 14.7528L11.9109 14.5871C11.4769 14.0699 11.2662 13.4016 11.325 12.7291C11.3839 12.0565 11.7075 11.4349 12.2246 11.001C12.7418 10.567 13.4101 10.3563 14.0827 10.4151C14.7552 10.474 15.3768 10.7976 15.8107 11.3147L15.8844 11.4025C16.1489 11.7151 16.499 11.9437 16.8917 12.0599C17.2845 12.1761 17.7026 12.1749 18.0947 12.0566C18.4976 11.9396 18.8563 11.7046 19.1245 11.3819C19.3926 11.0591 19.5579 10.6635 19.5991 10.2459L19.6085 10.1383C19.6375 9.80506 19.7319 9.48078 19.8863 9.18403C20.0406 8.88727 20.252 8.62385 20.5082 8.40883C20.7645 8.19381 21.0606 8.0314 21.3797 7.9309C21.6987 7.8304 22.0345 7.79377 22.3677 7.82311C22.7009 7.85208 23.0252 7.94645 23.322 8.10083C23.6187 8.25521 23.8822 8.46657 24.0972 8.72282C24.3122 8.97907 24.4746 9.27519 24.5751 9.59425C24.6756 9.9133 24.7122 10.249 24.6829 10.5823L24.6735 10.6898C24.6415 11.1082 24.7356 11.5266 24.9437 11.891C25.1517 12.2554 25.4641 12.5491 25.8407 12.7343L25.9061 12.8123C26.2717 12.9969 26.6832 13.0707 27.0902 13.0244C27.4971 12.9781 27.8816 12.8139 28.1964 12.5519L28.3622 12.4128C28.8793 11.9789 29.5477 11.7681 30.2202 11.827C30.8927 11.8858 31.5143 12.2094 31.9483 12.7266C32.3822 13.2437 32.5929 13.9121 32.5341 14.5846C32.4753 15.2571 32.1517 15.8787 31.6345 16.3127L31.5468 16.3863C31.2341 16.6508 31.0056 17.001 30.8894 17.3937C30.7731 17.7864 30.7743 18.2045 30.8927 18.5966Z" />
            </svg> */}
            <svg id="big-gear" className="elements-practical-gears" x="79" y="46.5" width="59" height="59" viewBox="0 0 59 59" xmlns="http://www.w3.org/2000/svg">
                <path stroke-width="2.5" d="M32.0501 37.4858C36.249 36.2818 38.6768 31.9019 37.4728 27.7031C36.2688 23.5042 31.8889 21.0764 27.69 22.2804C23.4912 23.4844 21.0634 27.8643 22.2674 32.0631C23.4714 36.262 27.8513 38.6898 32.0501 37.4858Z" />
                <path className="elements-practical-gears-outer" d="M50.8035 32.1084C50.6853 32.9695 50.8278 33.8462 51.2126 34.6256C51.5974 35.4049 52.2068 36.0511 52.9623 36.4809L53.158 36.5893C53.7642 36.9249 54.2983 37.3767 54.7298 37.9189C55.1613 38.4611 55.4817 39.083 55.6727 39.749C55.8637 40.4151 55.9216 41.1123 55.8429 41.8007C55.7643 42.4892 55.5507 43.1554 55.2145 43.7612C54.8789 44.3674 54.4271 44.9016 53.8849 45.3331C53.3428 45.7646 52.7209 46.085 52.0548 46.276C51.3887 46.467 50.6915 46.5248 50.0031 46.4462C49.3146 46.3676 48.6484 46.154 48.0426 45.8177L47.8469 45.7093C47.0821 45.2963 46.2112 45.1219 45.3463 45.2086C44.4815 45.2953 43.6625 45.639 42.9948 46.1955C42.3374 46.7317 41.8511 47.4484 41.5958 48.2575C41.3405 49.0665 41.3273 49.9325 41.5579 50.7489L41.6814 51.1797C42.0669 52.524 41.9025 53.9663 41.2246 55.1894C40.5466 56.4124 39.4105 57.3161 38.0663 57.7016C36.7221 58.087 35.2797 57.9227 34.0567 57.2447C32.8336 56.5668 31.9299 55.4307 31.5445 54.0865L31.4791 53.8584C31.2189 53.0252 30.7141 52.2895 30.0303 51.747C29.3465 51.2045 28.5153 50.8803 27.6448 50.8165C26.7837 50.6983 25.907 50.8408 25.1276 51.2256C24.3482 51.6104 23.702 52.2198 23.2723 52.9753L23.1638 53.171C22.8282 53.7772 22.3765 54.3114 21.8343 54.7429C21.2921 55.1744 20.6702 55.4948 20.0042 55.6858C19.3381 55.8768 18.6409 55.9346 17.9524 55.856C17.264 55.7773 16.5978 55.5638 15.992 55.2275C15.3857 54.8919 14.8516 54.4401 14.4201 53.898C13.9886 53.3558 13.6682 52.7339 13.4772 52.0678C13.2862 51.4017 13.2284 50.7045 13.307 50.0161C13.3856 49.3277 13.5992 48.6615 13.9355 48.0556L14.0439 47.86C14.4569 47.0952 14.6313 46.2242 14.5446 45.3594C14.4579 44.4945 14.1142 43.6755 13.5576 43.0079C13.0215 42.3504 12.3048 41.8641 11.4957 41.6088C10.6867 41.3535 9.82069 41.3403 9.00427 41.5709L8.57345 41.6944C7.22921 42.0799 5.7869 41.9156 4.56382 41.2376C3.34074 40.5596 2.43707 39.4236 2.05162 38.0793C1.66616 36.7351 1.83049 35.2928 2.50846 34.0697C3.18642 32.8466 4.32249 31.943 5.66673 31.5575L5.89481 31.4921C6.728 31.2319 7.46366 30.7272 8.00615 30.0434C8.54864 29.3596 8.87287 28.5284 8.93669 27.6578C9.05486 26.7967 8.91236 25.92 8.52756 25.1406C8.14277 24.3613 7.53333 23.7151 6.77783 23.2853L6.58218 23.1769C5.97595 22.8413 5.44182 22.3895 5.01032 21.8473C4.57881 21.3052 4.25841 20.6833 4.06741 20.0172C3.87642 19.3511 3.81858 18.6539 3.89722 17.9655C3.97585 17.277 4.1894 16.6108 4.52567 16.005C4.86127 15.3988 5.31307 14.8646 5.85523 14.4331C6.39739 14.0016 7.01929 13.6812 7.68537 13.4902C8.35144 13.2992 9.04863 13.2414 9.73707 13.32C10.4255 13.3987 11.0917 13.6122 11.6976 13.9485L11.8932 14.0569C12.658 14.4699 13.529 14.6443 14.3938 14.5576C15.2587 14.471 16.0777 14.1272 16.7453 13.5707L16.9481 13.5125C17.6055 12.9764 18.0918 12.2597 18.3471 11.4506C18.6024 10.6416 18.6156 9.77558 18.385 8.95917L18.2615 8.52835C17.876 7.18411 18.0404 5.7418 18.7183 4.51872C19.3963 3.29564 20.5323 2.39197 21.8766 2.00652C23.2208 1.62106 24.6631 1.78539 25.8862 2.46336C27.1093 3.14132 28.013 4.27738 28.3984 5.62163L28.4638 5.84971C28.7009 6.66426 29.171 7.39171 29.8162 7.9425C30.4615 8.4933 31.2537 8.84341 32.0953 8.94972C32.9564 9.06789 33.8332 8.92539 34.6125 8.5406C35.3919 8.1558 36.0381 7.54637 36.4678 6.79087L36.5763 6.59521C36.9119 5.98899 37.3637 5.45485 37.9059 5.02335C38.448 4.59185 39.0699 4.27144 39.736 4.08044C40.4021 3.88945 41.0993 3.83162 41.7877 3.91025C42.4761 3.98888 43.1423 4.20244 43.7482 4.53871C44.3544 4.8743 44.8885 5.3261 45.3201 5.86826C45.7516 6.41043 46.072 7.03232 46.263 7.6984C46.454 8.36447 46.5118 9.06166 46.4332 9.75011C46.3545 10.4385 46.141 11.1047 45.8047 11.7106L45.6962 11.9062C45.2833 12.671 45.1089 13.542 45.1955 14.4068C45.2822 15.2717 45.626 16.0907 46.1825 16.7584L46.2406 16.9611C46.7768 17.6185 47.4935 18.1048 48.3026 18.3601C49.1116 18.6155 49.9776 18.6286 50.794 18.398L51.2248 18.2745C52.5691 17.8891 54.0114 18.0534 55.2345 18.7314C56.4575 19.4093 57.3612 20.5454 57.7467 21.8896C58.1321 23.2339 57.9678 24.6762 57.2898 25.8993C56.6119 27.1223 55.4758 28.026 54.1316 28.4115L53.9035 28.4769C53.0889 28.7139 52.3615 29.184 51.8107 29.8293C51.2599 30.4745 50.9098 31.2667 50.8035 32.1084Z" />
            </svg>
            <svg id="small-gear" className="elements-practical-gears" x="46" y="88.5" width="46" height="46" viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg">
                <path stroke-width="2.5" d="M23 29C26.3137 29 29 26.3137 29 23C29 19.6863 26.3137 17 23 17C19.6863 17 17 19.6863 17 23C17 26.3137 19.6863 29 23 29Z" />
                <path className="elements-practical-gears-outer" d="M37.8 29C37.5338 29.6032 37.4544 30.2724 37.572 30.9212C37.6896 31.57 37.9989 32.1686 38.46 32.64L38.58 32.76C38.9519 33.1315 39.2469 33.5726 39.4482 34.0582C39.6495 34.5438 39.7531 35.0643 39.7531 35.59C39.7531 36.1157 39.6495 36.6362 39.4482 37.1218C39.2469 37.6074 38.9519 38.0485 38.58 38.42C38.2085 38.7919 37.7674 39.0869 37.2818 39.2882C36.7962 39.4895 36.2757 39.5931 35.75 39.5931C35.2243 39.5931 34.7038 39.4895 34.2182 39.2882C33.7326 39.0869 33.2915 38.7919 32.92 38.42L32.8 38.3C32.3286 37.8389 31.73 37.5296 31.0812 37.412C30.4324 37.2944 29.7632 37.3738 29.16 37.64C28.5685 37.8935 28.064 38.3145 27.7086 38.8511C27.3533 39.3877 27.1626 40.0164 27.16 40.66V41C27.16 42.0609 26.7386 43.0783 25.9884 43.8284C25.2383 44.5786 24.2209 45 23.16 45C22.0991 45 21.0817 44.5786 20.3316 43.8284C19.5814 43.0783 19.16 42.0609 19.16 41V40.82C19.1445 40.158 18.9302 39.516 18.545 38.9774C18.1598 38.4388 17.6215 38.0286 17 37.8C16.3968 37.5338 15.7276 37.4544 15.0788 37.572C14.43 37.6896 13.8314 37.9989 13.36 38.46L13.24 38.58C12.8685 38.9519 12.4274 39.2469 11.9418 39.4482C11.4562 39.6495 10.9357 39.7531 10.41 39.7531C9.88434 39.7531 9.36383 39.6495 8.87824 39.4482C8.39265 39.2469 7.95149 38.9519 7.58 38.58C7.20809 38.2085 6.91306 37.7674 6.71176 37.2818C6.51046 36.7962 6.40685 36.2757 6.40685 35.75C6.40685 35.2243 6.51046 34.7038 6.71176 34.2182C6.91306 33.7326 7.20809 33.2915 7.58 32.92L7.7 32.8C8.16107 32.3286 8.47037 31.73 8.58801 31.0812C8.70565 30.4324 8.62623 29.7632 8.36 29.16C8.10647 28.5685 7.68551 28.064 7.14893 27.7086C6.61235 27.3533 5.98357 27.1626 5.34 27.16H5C3.93913 27.16 2.92172 26.7386 2.17157 25.9884C1.42143 25.2383 1 24.2209 1 23.16C1 22.0991 1.42143 21.0817 2.17157 20.3316C2.92172 19.5814 3.93913 19.16 5 19.16H5.18C5.84199 19.1445 6.48401 18.9302 7.0226 18.545C7.56119 18.1598 7.97143 17.6215 8.2 17C8.46623 16.3968 8.54565 15.7276 8.42801 15.0788C8.31037 14.43 8.00107 13.8314 7.54 13.36L7.42 13.24C7.04809 12.8685 6.75306 12.4274 6.55176 11.9418C6.35046 11.4562 6.24685 10.9357 6.24685 10.41C6.24685 9.88434 6.35046 9.36383 6.55176 8.87824C6.75306 8.39265 7.04809 7.95149 7.42 7.58C7.79149 7.20809 8.23265 6.91306 8.71824 6.71176C9.20383 6.51046 9.72434 6.40685 10.25 6.40685C10.7757 6.40685 11.2962 6.51046 11.7818 6.71176C12.2674 6.91306 12.7085 7.20809 13.08 7.58L13.2 7.7C13.6714 8.16107 14.27 8.47037 14.9188 8.58801C15.5676 8.70565 16.2368 8.62623 16.84 8.36H17C17.5915 8.10647 18.096 7.68551 18.4514 7.14893C18.8067 6.61235 18.9974 5.98357 19 5.34V5C19 3.93913 19.4214 2.92172 20.1716 2.17157C20.9217 1.42143 21.9391 1 23 1C24.0609 1 25.0783 1.42143 25.8284 2.17157C26.5786 2.92172 27 3.93913 27 5V5.18C27.0026 5.82357 27.1933 6.45235 27.5486 6.98893C27.904 7.52551 28.4085 7.94647 29 8.2C29.6032 8.46623 30.2724 8.54565 30.9212 8.42801C31.57 8.31037 32.1686 8.00107 32.64 7.54L32.76 7.42C33.1315 7.04809 33.5726 6.75306 34.0582 6.55176C34.5438 6.35046 35.0643 6.24685 35.59 6.24685C36.1157 6.24685 36.6362 6.35046 37.1218 6.55176C37.6074 6.75306 38.0485 7.04809 38.42 7.42C38.7919 7.79149 39.0869 8.23265 39.2882 8.71824C39.4895 9.20383 39.5931 9.72434 39.5931 10.25C39.5931 10.7757 39.4895 11.2962 39.2882 11.7818C39.0869 12.2674 38.7919 12.7085 38.42 13.08L38.3 13.2C37.8389 13.6714 37.5296 14.27 37.412 14.9188C37.2944 15.5676 37.3738 16.2368 37.64 16.84V17C37.8935 17.5915 38.3145 18.096 38.8511 18.4514C39.3877 18.8067 40.0164 18.9974 40.66 19H41C42.0609 19 43.0783 19.4214 43.8284 20.1716C44.5786 20.9217 45 21.9391 45 23C45 24.0609 44.5786 25.0783 43.8284 25.8284C43.0783 26.5786 42.0609 27 41 27H40.82C40.1764 27.0026 39.5477 27.1933 39.0111 27.5486C38.4745 27.904 38.0535 28.4085 37.8 29Z" />
            </svg>
            {/* <svg className="elements-practical-gears" x="84.5" y="99.5" width="43" height="43" viewBox="0 0 43 43" opacity="0.8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.6779 24.6505C25.2933 23.295 25.504 20.8867 24.1485 19.2713C22.7931 17.6559 20.3847 17.4452 18.7694 18.8007C17.154 20.1562 16.9433 22.5645 18.2988 24.1799C19.6542 25.7953 22.0626 26.006 23.6779 24.6505Z" />
                <path d="M30.8927 18.5966C31.0096 18.9996 31.2446 19.3583 31.5674 19.6264C31.8901 19.8946 32.2858 20.0599 32.7033 20.1011L32.8109 20.1105C33.1442 20.1394 33.4685 20.2338 33.7652 20.3882C34.062 20.5426 34.3254 20.7539 34.5404 21.0102C34.7554 21.2664 34.9178 21.5626 35.0183 21.8816C35.1188 22.2007 35.1555 22.5364 35.1261 22.8696C35.0972 23.2029 35.0028 23.5272 34.8484 23.8239C34.694 24.1207 34.4827 24.3841 34.2264 24.5991C33.9702 24.8141 33.6741 24.9765 33.355 25.077C33.0359 25.1776 32.7002 25.2142 32.367 25.1848L32.2594 25.1754C31.841 25.1435 31.4227 25.2376 31.0583 25.4456C30.6939 25.6537 30.4002 25.9661 30.215 26.3426C30.0303 26.7082 29.9566 27.1197 30.0028 27.5267C30.0491 27.9336 30.2133 28.3181 30.4753 28.6329L30.6144 28.7987C31.0484 29.3158 31.2591 29.9842 31.2003 30.6567C31.1414 31.3292 30.8178 31.9508 30.3007 32.3848C29.7835 32.8187 29.1152 33.0294 28.4426 32.9706C27.7701 32.9118 27.1485 32.5882 26.7146 32.071L26.6409 31.9833C26.3626 31.6669 25.9955 31.4416 25.5874 31.3366C25.1793 31.2316 24.7491 31.2518 24.3526 31.3946C23.9497 31.5116 23.591 31.7466 23.3228 32.0693C23.0547 32.3921 22.8894 32.7877 22.8482 33.2053L22.8388 33.3129C22.8098 33.6461 22.7154 33.9704 22.561 34.2672C22.4067 34.5639 22.1953 34.8273 21.9391 35.0424C21.6828 35.2574 21.3867 35.4198 21.0676 35.5203C20.7486 35.6208 20.4128 35.6574 20.0796 35.6281C19.7464 35.5991 19.4221 35.5047 19.1253 35.3504C18.8286 35.196 18.5651 34.9846 18.3501 34.7284C18.1351 34.4721 17.9727 34.176 17.8722 33.8569C17.7717 33.5379 17.7351 33.2021 17.7644 32.8689L17.7738 32.7613C17.8058 32.343 17.7117 31.9246 17.5036 31.5602C17.2956 31.1958 16.9832 30.9021 16.6066 30.7169C16.2411 30.5323 15.8295 30.4585 15.4226 30.5048C15.0156 30.551 14.6311 30.7153 14.3163 30.9773L14.1506 31.1164C13.6334 31.5503 12.9651 31.761 12.2926 31.7022C11.62 31.6434 10.9984 31.3198 10.5645 30.8026C10.1305 30.2855 9.9198 29.6171 9.97864 28.9446C10.0375 28.2721 10.3611 27.6504 10.8782 27.2165L10.966 27.1429C11.2823 26.8645 11.5077 26.4975 11.6126 26.0894C11.7176 25.6813 11.6974 25.251 11.5546 24.8546C11.4377 24.4516 11.2027 24.0929 10.8799 23.8248C10.5572 23.5566 10.1615 23.3913 9.74395 23.3501L9.63637 23.3407C9.30312 23.3117 8.97884 23.2174 8.68208 23.063C8.38532 22.9086 8.1219 22.6973 7.90688 22.441C7.69186 22.1848 7.52946 21.8886 7.42896 21.5696C7.32845 21.2505 7.29183 20.9148 7.32117 20.5816C7.35014 20.2483 7.44451 19.924 7.59889 19.6273C7.75326 19.3305 7.96462 19.0671 8.22087 18.8521C8.47712 18.637 8.77324 18.4746 9.0923 18.3741C9.41136 18.2736 9.7471 18.237 10.0803 18.2664L10.1879 18.2758C10.6063 18.3077 11.0246 18.2136 11.389 18.0056C11.7534 17.7975 12.0471 17.4851 12.2323 17.1086L12.3103 17.0431C12.495 16.6776 12.5687 16.266 12.5225 15.8591C12.4762 15.4521 12.312 15.0676 12.05 14.7528L11.9109 14.5871C11.4769 14.0699 11.2662 13.4016 11.325 12.7291C11.3839 12.0565 11.7075 11.4349 12.2246 11.001C12.7418 10.567 13.4101 10.3563 14.0827 10.4151C14.7552 10.474 15.3768 10.7976 15.8107 11.3147L15.8844 11.4025C16.1489 11.7151 16.499 11.9437 16.8917 12.0599C17.2845 12.1761 17.7026 12.1749 18.0947 12.0566C18.4976 11.9396 18.8563 11.7046 19.1245 11.3819C19.3926 11.0591 19.5579 10.6635 19.5991 10.2459L19.6085 10.1383C19.6375 9.80506 19.7319 9.48078 19.8863 9.18403C20.0406 8.88727 20.252 8.62385 20.5082 8.40883C20.7645 8.19381 21.0606 8.0314 21.3797 7.9309C21.6987 7.8304 22.0345 7.79377 22.3677 7.82311C22.7009 7.85208 23.0252 7.94645 23.322 8.10083C23.6187 8.25521 23.8822 8.46657 24.0972 8.72282C24.3122 8.97907 24.4746 9.27519 24.5751 9.59425C24.6756 9.9133 24.7122 10.249 24.6829 10.5823L24.6735 10.6898C24.6415 11.1082 24.7356 11.5266 24.9437 11.891C25.1517 12.2554 25.4641 12.5491 25.8407 12.7343L25.9061 12.8123C26.2717 12.9969 26.6832 13.0707 27.0902 13.0244C27.4971 12.9781 27.8816 12.8139 28.1964 12.5519L28.3622 12.4128C28.8793 11.9789 29.5477 11.7681 30.2202 11.827C30.8927 11.8858 31.5143 12.2094 31.9483 12.7266C32.3822 13.2437 32.5929 13.9121 32.5341 14.5846C32.4753 15.2571 32.1517 15.8787 31.6345 16.3127L31.5468 16.3863C31.2341 16.6508 31.0056 17.001 30.8894 17.3937C30.7731 17.7864 30.7743 18.2045 30.8927 18.5966Z" />
            </svg> */}
        </svg>
        </div>
    )
}

export { ElementsTime, ElementsImpact, ElementsPractical };