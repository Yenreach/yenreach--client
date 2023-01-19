import React from 'react'
import Button from '../ui/Button'
import PropTypes from 'prop-types'

const JobDescription = ({ job }) => {
  return (
    <div className='flex flex-col w-[55%]'>
		<div className="relative flex gap-3 justify-center overflow-hidden items-center w-full bg-blue px-4 py-6">
			<svg className='absolute -top-4 -right-[20%]' width="488" height="383" viewBox="0 0 488 383" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g opacity="0.45">
				<path d="M359.724 5.62459C336.186 3.38521 315.122 10.799 294.154 18.6548C293.142 19.034 292.13 19.4143 291.117 19.7945C271.121 27.308 251.104 34.8292 228.789 34.667C207.485 34.512 187.558 25.8183 168.035 17.3007C165.644 16.2578 163.26 15.2175 160.88 14.1959C139.144 4.86637 117.748 -2.91045 95.7345 3.73556C85.2682 6.89533 78.7949 11.9787 74.7612 18.2983C70.7431 24.5934 69.1959 32.0395 68.4295 39.8306C68.0628 43.5581 67.8734 47.3861 67.6837 51.2171C67.6751 51.3923 67.6664 51.5675 67.6577 51.7427C67.4586 55.7562 67.2504 59.7706 66.8313 63.7155C65.9929 71.6074 64.316 79.1516 60.2385 85.7127C56.4615 91.7903 51.1719 97.4567 45.2726 102.965C41.4536 106.531 37.4076 110.006 33.3641 113.478C31.1509 115.379 28.9385 117.279 26.7644 119.193C20.6403 124.584 14.85 130.063 10.3759 135.863C5.8994 141.667 2.70964 147.832 1.83746 154.6C-1.92243 183.776 12.4967 213.861 41.0673 236.759C70.1989 260.106 112.88 282.857 160.201 281.755C184.041 281.2 202.01 271.842 219.261 261.044C222.375 259.095 225.464 257.1 228.559 255.102C242.636 246.013 256.835 236.845 274.118 231.48C287.574 227.303 303.657 226.777 319.574 226.256C322.464 226.162 325.348 226.067 328.21 225.951C337.493 225.575 346.533 224.969 354.691 223.367C362.849 221.765 370.178 219.159 376.013 214.747C381.902 210.295 384.406 205.102 385.045 199.508C385.679 193.967 384.477 188.064 383.059 182.185C382.838 181.268 382.612 180.351 382.385 179.435C381.151 174.438 379.927 169.481 379.606 164.657C379.229 158.982 380.114 153.576 383.698 148.645C389.788 140.266 399.687 132.892 411.104 125.948C418.746 121.301 427.014 116.878 435.225 112.485C439.283 110.313 443.328 108.149 447.277 105.969C459.177 99.399 470.193 92.6884 477.848 85.2601C485.514 77.8217 489.916 69.556 488.323 59.916C486.928 51.4789 481.329 44.1936 473.043 37.9517C464.753 31.7077 453.703 26.4518 441.246 22.0816C416.33 13.3399 385.632 8.08938 359.724 5.62459Z" stroke="white" strokeWidth="1.5"/>
				<path d="M347.24 19.7124C326.243 17.7218 307.456 24.3126 288.771 31.2887C287.87 31.625 286.969 31.9622 286.069 32.2994C268.246 38.9729 250.42 45.6474 230.549 45.5034C211.581 45.3659 193.839 37.6525 176.438 30.0876C174.308 29.1616 172.183 28.2377 170.062 27.3303C150.694 19.0458 131.601 12.1266 111.953 18.0378C102.611 20.8485 96.8244 25.3731 93.2173 31.0048C89.6257 36.6123 88.2452 43.241 87.5617 50.1645C87.2347 53.4768 87.0658 56.8781 86.8969 60.2795C86.8891 60.4355 86.8814 60.5914 86.8736 60.7474C86.6962 64.3118 86.5108 67.8745 86.1376 71.375C85.3909 78.3782 83.8985 85.0629 80.2747 90.8737C76.9146 96.2617 72.207 101.288 66.9517 106.178C63.5494 109.344 59.9463 112.427 56.3439 115.51C54.3713 117.198 52.3989 118.886 50.4598 120.587C45.0016 125.376 39.8365 130.246 35.8442 135.404C31.8496 140.565 28.998 146.054 28.2181 152.084C24.8625 178.032 37.7323 204.776 63.2089 225.123C89.1779 245.864 127.232 266.08 169.427 265.101C190.695 264.607 206.722 256.287 222.1 246.695C224.877 244.963 227.631 243.191 230.389 241.416C242.934 233.345 255.577 225.21 270.967 220.45C282.947 216.744 297.267 216.277 311.452 215.814C314.028 215.73 316.599 215.646 319.151 215.543C327.425 215.209 335.485 214.67 342.762 213.247C350.038 211.823 356.583 209.505 361.796 205.577C367.062 201.609 369.306 196.977 369.878 191.986C370.445 187.048 369.37 181.792 368.107 176.572C367.909 175.756 367.707 174.941 367.505 174.127C366.406 169.69 365.317 165.296 365.032 161.021C364.697 155.995 365.483 151.215 368.662 146.857C374.079 139.43 382.888 132.888 393.061 126.723C399.869 122.597 407.233 118.671 414.55 114.77C418.167 112.841 421.773 110.919 425.294 108.982C435.899 103.147 445.724 97.1834 452.555 90.5782C459.396 83.9632 463.34 76.5963 461.914 67.9959C460.666 60.4731 455.658 53.9864 448.265 48.4366C440.868 42.8846 431.012 38.2137 419.907 34.3313C397.694 26.5652 370.331 21.9016 347.24 19.7124Z" stroke="white" strokeWidth="1.5"/>
				<path d="M373.683 34.2891C352.686 32.2984 333.899 38.8893 315.214 45.8653C314.313 46.2017 313.412 46.5389 312.511 46.8761C294.688 53.5496 276.863 60.2241 256.992 60.0801C238.024 59.9426 220.282 52.2291 202.881 44.6642C200.751 43.7382 198.626 42.8144 196.505 41.907C177.137 33.6225 158.044 26.7032 138.396 32.6145C129.054 35.4251 123.267 39.9498 119.66 45.5815C116.069 51.1889 114.688 57.8177 114.005 64.7411C113.678 68.0534 113.509 71.4547 113.34 74.8562C113.332 75.0121 113.324 75.1681 113.316 75.324C113.139 78.8884 112.954 82.4512 112.58 85.9517C111.834 92.9548 110.341 99.6396 106.718 105.45C103.357 110.838 98.6498 115.865 93.3946 120.755C89.9923 123.92 86.3892 127.004 82.7867 130.087C80.8142 131.775 78.8418 133.463 76.9027 135.164C71.4444 139.953 66.2794 144.822 62.2871 149.98C58.2925 155.141 55.4408 160.63 54.6609 166.661C51.3054 192.608 64.1751 219.353 89.6517 239.7C115.621 260.441 153.674 280.656 195.87 279.677C217.138 279.184 233.165 270.864 248.543 261.272C251.32 259.54 254.074 257.768 256.832 255.993C269.377 247.922 282.02 239.787 297.41 235.026C309.39 231.32 323.71 230.853 337.895 230.391C340.471 230.307 343.042 230.223 345.594 230.12C353.868 229.786 361.928 229.247 369.205 227.823C376.481 226.4 383.026 224.082 388.239 220.154C393.505 216.186 395.749 211.553 396.321 206.563C396.888 201.624 395.812 196.369 394.549 191.149C394.352 190.333 394.15 189.518 393.948 188.704C392.849 184.267 391.76 179.873 391.475 175.598C391.139 170.571 391.925 165.792 395.105 161.434C400.522 154.007 409.331 147.465 419.504 141.3C426.312 137.174 433.676 133.247 440.993 129.347C444.61 127.418 448.216 125.496 451.737 123.559C462.342 117.724 472.167 111.76 478.998 105.155C485.839 98.5398 489.783 91.1729 488.357 82.5726C487.109 75.0498 482.101 68.563 474.708 63.0132C467.311 57.4612 457.455 52.7904 446.35 48.908C424.137 41.1419 396.774 36.4783 373.683 34.2891Z" stroke="white" strokeWidth="1.5"/>
				<path d="M400.126 48.8657C379.13 46.8751 360.343 53.4659 341.657 60.442C340.757 60.7783 339.856 61.1155 338.955 61.4528C321.132 68.1263 303.307 74.8007 283.435 74.6567C264.468 74.5193 246.726 66.8058 229.325 59.2409C227.195 58.3149 225.07 57.3911 222.949 56.4837C203.58 48.1991 184.488 41.2799 164.84 47.1912C155.498 50.0018 149.711 54.5265 146.104 60.1581C142.512 65.7656 141.132 72.3944 140.448 79.3178C140.121 82.6301 139.953 86.0314 139.784 89.4329C139.776 89.5888 139.768 89.7447 139.76 89.9007C139.583 93.4651 139.397 97.0278 139.024 100.528C138.278 107.532 136.785 114.216 133.161 120.027C129.801 125.415 125.094 130.441 119.838 135.331C116.436 138.497 112.833 141.581 109.231 144.663C107.258 146.352 105.286 148.04 103.347 149.741C97.8883 154.529 92.7232 159.399 88.7309 164.557C84.7363 169.718 81.8847 175.207 81.1048 181.237C77.7492 207.185 90.619 233.929 116.096 254.277C142.065 275.017 180.118 295.233 222.314 294.254C243.581 293.76 259.609 285.44 274.987 275.849C277.764 274.117 280.518 272.345 283.276 270.57C295.821 262.498 308.463 254.364 323.853 249.603C335.834 245.897 350.154 245.43 364.339 244.967C366.914 244.883 369.486 244.8 372.037 244.696C380.311 244.362 388.372 243.824 395.649 242.4C402.925 240.976 409.469 238.659 414.683 234.731C419.949 230.763 422.193 226.13 422.765 221.139C423.332 216.201 422.256 210.946 420.993 205.726C420.796 204.91 420.594 204.094 420.392 203.281C419.292 198.844 418.203 194.449 417.918 190.174C417.583 185.148 418.369 180.369 421.549 176.01C426.966 168.584 435.775 162.041 445.947 155.876C452.756 151.75 460.12 147.824 467.437 143.923C471.054 141.995 474.66 140.072 478.18 138.135C488.786 132.301 498.611 126.337 505.442 119.732C512.283 113.116 516.227 105.75 514.801 97.1492C513.553 89.6265 508.545 83.1397 501.152 77.5899C493.755 72.0379 483.899 67.367 472.794 63.4846C450.581 55.7186 423.218 51.0549 400.126 48.8657Z" stroke="white" strokeWidth="1.5"/>
				<path d="M426.568 63.4426C405.571 61.452 386.784 68.0428 368.099 75.0189C367.198 75.3552 366.297 75.6924 365.397 76.0297C347.574 82.7032 329.748 89.3776 309.877 89.2336C290.91 89.0962 273.167 81.3827 255.766 73.8178C253.636 72.8918 251.512 71.968 249.39 71.0606C230.022 62.776 210.93 55.8568 191.281 61.7681C181.939 64.5787 176.153 69.1034 172.545 74.735C168.954 80.3425 167.573 86.9713 166.89 93.8947C166.563 97.207 166.394 100.608 166.225 104.01C166.217 104.166 166.209 104.322 166.202 104.478C166.024 108.042 165.839 111.605 165.466 115.105C164.719 122.108 163.227 128.793 159.603 134.604C156.243 139.992 151.535 145.018 146.28 149.908C142.878 153.074 139.274 156.157 135.672 159.24C133.699 160.929 131.727 162.616 129.788 164.318C124.33 169.106 119.165 173.976 115.172 179.134C111.178 184.295 108.326 189.784 107.546 195.814C104.191 221.762 117.06 248.506 142.537 268.854C168.506 289.594 206.56 309.81 248.755 308.831C270.023 308.337 286.05 300.017 301.428 290.426C304.205 288.693 306.959 286.922 309.717 285.147C322.262 277.075 334.905 268.941 350.295 264.18C362.275 260.474 376.595 260.007 390.78 259.544C393.356 259.46 395.927 259.376 398.479 259.273C406.753 258.939 414.813 258.401 422.09 256.977C429.366 255.553 435.911 253.235 441.124 249.307C446.391 245.34 448.634 240.707 449.206 235.716C449.773 230.778 448.698 225.522 447.435 220.303C447.237 219.486 447.035 218.671 446.834 217.858C445.734 213.42 444.645 209.026 444.36 204.751C444.025 199.725 444.811 194.946 447.99 190.587C453.407 183.16 462.216 176.618 472.389 170.453C479.197 166.327 486.562 162.401 493.878 158.5C497.495 156.572 501.101 154.649 504.622 152.712C515.227 146.878 525.052 140.914 531.883 134.308C538.724 127.693 542.668 120.326 541.242 111.726C539.995 104.203 534.986 97.7166 527.593 92.1668C520.196 86.6148 510.34 81.9439 499.235 78.0615C477.022 70.2955 449.659 65.6318 426.568 63.4426Z" stroke="white" strokeWidth="1.5"/>
				<path d="M453.013 78.0195C432.016 76.0289 413.229 82.6197 394.544 89.5958C393.643 89.9321 392.743 90.2694 391.842 90.6066C374.019 97.2801 356.194 103.955 336.322 103.811C317.355 103.673 299.612 95.9596 282.212 88.3947C280.082 87.4687 277.957 86.5449 275.835 85.6375C256.467 77.3529 237.375 70.4337 217.726 76.345C208.384 79.1556 202.598 83.6803 198.991 89.3119C195.399 94.9194 194.019 101.548 193.335 108.472C193.008 111.784 192.839 115.185 192.67 118.587C192.663 118.743 192.655 118.899 192.647 119.054C192.47 122.619 192.284 126.182 191.911 129.682C191.164 136.685 189.672 143.37 186.048 149.181C182.688 154.569 177.98 159.595 172.725 164.485C169.323 167.651 165.72 170.734 162.117 173.817C160.145 175.505 158.172 177.193 156.233 178.895C150.775 183.683 145.61 188.553 141.618 193.711C137.623 198.872 134.771 204.361 133.992 210.391C130.636 236.339 143.506 263.083 168.982 283.431C194.951 304.171 233.005 324.387 275.201 323.408C296.468 322.914 312.496 314.594 327.873 305.003C330.65 303.27 333.404 301.498 336.163 299.724C348.707 291.652 361.35 283.518 376.74 278.757C388.721 275.051 403.04 274.584 417.226 274.121C419.801 274.037 422.372 273.953 424.924 273.85C433.198 273.516 441.259 272.978 448.535 271.554C455.811 270.13 462.356 267.812 467.57 263.884C472.836 259.917 475.079 255.284 475.652 250.293C476.218 245.355 475.143 240.099 473.88 234.879C473.682 234.063 473.48 233.248 473.279 232.435C472.179 227.997 471.09 223.603 470.805 219.328C470.47 214.302 471.256 209.523 474.435 205.164C479.853 197.737 488.661 191.195 498.834 185.03C505.643 180.904 513.007 176.978 520.323 173.077C523.941 171.149 527.546 169.226 531.067 167.289C541.672 161.454 551.498 155.491 558.329 148.885C565.17 142.27 569.114 134.903 567.687 126.303C566.44 118.78 561.432 112.293 554.038 106.744C546.642 101.192 536.785 96.5208 525.681 92.6385C503.468 84.8724 476.105 80.2087 453.013 78.0195Z" stroke="white" strokeWidth="1.5"/>
				<path d="M479.457 92.5964C458.46 90.6058 439.673 97.1966 420.988 104.173C420.087 104.509 419.186 104.846 418.286 105.183C400.463 111.857 382.637 118.531 362.766 118.387C343.799 118.25 326.056 110.536 308.656 102.972C306.526 102.046 304.401 101.122 302.279 100.214C282.911 91.9298 263.819 85.0106 244.17 90.9219C234.828 93.7325 229.042 98.2572 225.435 103.889C221.843 109.496 220.462 116.125 219.779 123.049C219.452 126.361 219.283 129.762 219.114 133.164C219.106 133.32 219.099 133.475 219.091 133.631C218.913 137.196 218.728 140.759 218.355 144.259C217.608 151.262 216.116 157.947 212.492 163.758C209.132 169.146 204.424 174.172 199.169 179.062C195.767 182.228 192.164 185.311 188.561 188.394C186.589 190.082 184.616 191.77 182.677 193.471C177.219 198.26 172.054 203.13 168.061 208.288C164.067 213.449 161.215 218.938 160.435 224.968C157.08 250.916 169.95 277.66 195.426 298.007C221.395 318.748 259.449 338.964 301.644 337.985C322.912 337.491 338.94 329.171 354.317 319.579C357.094 317.847 359.848 316.075 362.607 314.3C375.151 306.229 387.794 298.094 403.184 293.334C415.165 289.628 429.484 289.161 443.669 288.698C446.245 288.614 448.816 288.53 451.368 288.427C459.642 288.093 467.702 287.554 474.979 286.131C482.255 284.707 488.8 282.389 494.013 278.461C499.28 274.493 501.523 269.861 502.096 264.87C502.662 259.932 501.587 254.676 500.324 249.456C500.126 248.64 499.924 247.825 499.723 247.012C498.623 242.574 497.534 238.18 497.249 233.905C496.914 228.879 497.7 224.1 500.879 219.741C506.296 212.314 515.105 205.772 525.278 199.607C532.086 195.481 539.451 191.555 546.767 187.654C550.384 185.726 553.99 183.803 557.511 181.866C568.116 176.031 577.942 170.067 584.772 163.462C591.613 156.847 595.557 149.48 594.131 140.88C592.884 133.357 587.876 126.87 580.482 121.321C573.086 115.769 563.229 111.098 552.125 107.215C529.912 99.4493 502.548 94.7856 479.457 92.5964Z" stroke="white" strokeWidth="1.5"/>
				<path d="M505.898 107.174C484.901 105.183 466.115 111.774 447.429 118.75C446.529 119.086 445.628 119.424 444.727 119.761C426.904 126.434 409.079 133.109 389.207 132.965C370.24 132.827 352.498 125.114 335.097 117.549C332.967 116.623 330.842 115.699 328.721 114.792C309.352 106.507 290.26 99.588 270.612 105.499C261.27 108.31 255.483 112.835 251.876 118.466C248.284 124.074 246.904 130.702 246.22 137.626C245.893 140.938 245.724 144.339 245.556 147.741C245.548 147.897 245.54 148.053 245.532 148.209C245.355 151.773 245.169 155.336 244.796 158.836C244.05 165.84 242.557 172.524 238.933 178.335C235.573 183.723 230.866 188.749 225.61 193.639C222.208 196.805 218.605 199.889 215.003 202.972C213.03 204.66 211.058 206.348 209.119 208.049C203.66 212.837 198.495 217.707 194.503 222.865C190.508 228.026 187.657 233.515 186.877 239.546C183.521 265.493 196.391 292.238 221.868 312.585C247.837 333.325 285.89 353.541 328.086 352.562C349.353 352.069 365.381 343.748 380.758 334.157C383.536 332.425 386.29 330.653 389.048 328.878C401.593 320.806 414.235 312.672 429.625 307.911C441.606 304.205 455.926 303.738 470.111 303.275C472.686 303.191 475.258 303.108 477.809 303.005C486.083 302.67 494.144 302.132 501.421 300.708C508.697 299.285 515.241 296.967 520.455 293.039C525.721 289.071 527.965 284.438 528.537 279.448C529.104 274.509 528.028 269.254 526.765 264.034C526.568 263.218 526.366 262.403 526.164 261.589C525.064 257.152 523.975 252.758 523.69 248.482C523.355 243.456 524.141 238.677 527.321 234.318C532.738 226.892 541.547 220.349 551.719 214.185C558.528 210.058 565.892 206.132 573.209 202.231C576.826 200.303 580.431 198.381 583.952 196.443C594.558 190.609 604.383 184.645 611.214 178.04C618.055 171.425 621.999 164.058 620.573 155.457C619.325 147.935 614.317 141.448 606.923 135.898C599.527 130.346 589.671 125.675 578.566 121.793C556.353 114.027 528.99 109.363 505.898 107.174Z" stroke="white" strokeWidth="1.5"/>
				<path d="M532.344 121.751C511.347 119.76 492.56 126.351 473.875 133.327C472.974 133.664 472.073 134.001 471.173 134.338C453.35 141.012 435.524 147.686 415.653 147.542C396.685 147.405 378.943 139.691 361.542 132.126C359.412 131.2 357.287 130.276 355.166 129.369C335.798 121.084 316.705 114.165 297.057 120.076C287.715 122.887 281.928 127.412 278.321 133.043C274.73 138.651 273.349 145.28 272.666 152.203C272.339 155.515 272.17 158.917 272.001 162.318C271.993 162.474 271.985 162.63 271.978 162.786C271.8 166.35 271.615 169.913 271.242 173.414C270.495 180.417 269.003 187.101 265.379 192.912C262.019 198.3 257.311 203.327 252.056 208.216C248.653 211.382 245.05 214.466 241.448 217.549C239.475 219.237 237.503 220.925 235.564 222.626C230.106 227.415 224.94 232.284 220.948 237.442C216.954 242.603 214.102 248.092 213.322 254.123C209.967 280.07 222.836 306.815 248.313 327.162C274.282 347.902 312.336 368.118 354.531 367.139C375.799 366.646 391.826 358.326 407.204 348.734C409.981 347.002 412.735 345.23 415.493 343.455C428.038 335.383 440.681 327.249 456.071 322.488C468.051 318.782 482.371 318.315 496.556 317.853C499.132 317.769 501.703 317.685 504.255 317.582C512.529 317.248 520.589 316.709 527.866 315.285C535.142 313.862 541.687 311.544 546.9 307.616C552.166 303.648 554.41 299.015 554.982 294.025C555.549 289.086 554.474 283.831 553.211 278.611C553.013 277.795 552.811 276.98 552.609 276.166C551.51 271.729 550.421 267.335 550.136 263.059C549.801 258.033 550.587 253.254 553.766 248.895C559.183 241.469 567.992 234.927 578.165 228.762C584.973 224.636 592.337 220.709 599.654 216.809C603.271 214.88 606.877 212.958 610.398 211.021C621.003 205.186 630.828 199.222 637.659 192.617C644.5 186.002 648.444 178.635 647.018 170.034C645.77 162.512 640.762 156.025 633.369 150.475C625.972 144.923 616.116 140.252 605.011 136.37C582.798 128.604 555.435 123.94 532.344 121.751Z" stroke="white" strokeWidth="1.5"/>
				<path d="M558.786 136.328C537.789 134.337 519.002 140.928 500.317 147.904C499.416 148.24 498.516 148.577 497.615 148.915C479.792 155.588 461.966 162.263 442.095 162.119C423.128 161.981 405.385 154.268 387.985 146.703C385.855 145.777 383.73 144.853 381.608 143.946C362.24 135.661 343.148 128.742 323.499 134.653C314.157 137.464 308.371 141.988 304.764 147.62C301.172 153.228 299.792 159.856 299.108 166.78C298.781 170.092 298.612 173.493 298.443 176.895C298.435 177.051 298.428 177.207 298.42 177.363C298.243 180.927 298.057 184.49 297.684 187.99C296.937 194.993 295.445 201.678 291.821 207.489C288.461 212.877 283.753 217.903 278.498 222.793C275.096 225.959 271.493 229.042 267.89 232.125C265.918 233.814 263.945 235.501 262.006 237.203C256.548 241.991 251.383 246.861 247.391 252.019C243.396 257.18 240.544 262.669 239.764 268.699C236.409 294.647 249.279 321.391 274.755 341.739C300.724 362.479 338.778 382.695 380.973 381.716C402.241 381.222 418.269 372.902 433.646 363.311C436.423 361.578 439.177 359.807 441.936 358.032C454.48 349.96 467.123 341.826 482.513 337.065C494.494 333.359 508.813 332.892 522.999 332.429C525.574 332.345 528.145 332.261 530.697 332.158C538.971 331.824 547.032 331.286 554.308 329.862C561.584 328.438 568.129 326.12 573.343 322.192C578.609 318.225 580.852 313.592 581.425 308.601C581.991 303.663 580.916 298.407 579.653 293.188C579.455 292.371 579.253 291.556 579.052 290.743C577.952 286.305 576.863 281.911 576.578 277.636C576.243 272.61 577.029 267.831 580.208 263.472C585.626 256.045 594.434 249.503 604.607 243.338C611.416 239.212 618.78 235.286 626.096 231.385C629.714 229.457 633.319 227.534 636.84 225.597C647.445 219.763 657.271 213.799 664.102 207.193C670.943 200.578 674.886 193.212 673.46 184.611C672.213 177.088 667.205 170.602 659.811 165.052C652.415 159.5 642.558 154.829 631.454 150.947C609.241 143.18 581.878 138.517 558.786 136.328Z" stroke="white" strokeWidth="1.5"/>
				</g>
			</svg>
			<div className="flex h-24 w-24 bg-white rounded-full"></div>
			<div className="flex flex-col flex-1 gap-1 text-white">
				<h2 className='font-light'>{ job.companyName }</h2>
				<h2 className='text-xl font-medium'>{ job.jobPosition }</h2>
				{
					job.jobTags.map((tag, index) => (
						<div className="grid px-1 font-normal text-xsm py-1 place-items-center bg-blue-light text-white w-fit">{ tag }</div>
					))
				}
			</div>
			<Button className="p-2 text-sm mb-10 z-10" variant='job-inverted'>Apply Now</Button>
		</div>
		<div className="flex flex-col border-2 border-gray-light py-6 px-4 overflow-y-scroll gap-6 h-[525px]">
			<h2 className='font-semibold text-xl mb-4'>Job Description</h2>
			<div className="flex flex-col gap-2">
				<h3 className='text-base font-medium'>Job Overview</h3>
				<p className='font-light text-xs '>{ job.jobOverview }</p>
			</div>
			<div className="flex flex-col gap-2">
				<h3 className='text-base font-medium'>Job Responsibilities</h3>
				<p className='font-light text-xs'>{ job.jonResponsibilities }</p>
			</div>
			<div className="flex flex-col gap-2">
				<h3 className='text-base font-medium'>Job Benefits</h3>
				<p className='font-light text-xs'>{ job.jobBenefits }</p>
			</div>
			<div className="flex flex-col gap-2">
				<h3 className='text-base font-medium'>Job Overview</h3>
				<p className='font-light text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum, molestie massa mauris augue netus purus ipsum. Iaculis vitae gravida neque tristique nibh non habitasse velit fermentum. Cursus quis scelerisque mattis viverra diam at. Nam at sit auctor ac purus cras tempor scelerisque sed. Tincidunt elit ut ultrices risus cras proin ullamcorper. Congue non faucibus pretium diam non mattis in velit. Amet dignissim nisl viverra ultrices. Massa imperdiet tristique euismod at.</p>
			</div>
			<div className="flex flex-col gap-2">
				<h3 className='text-base font-medium'>Job Overview</h3>
				<p className='font-light text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum, molestie massa mauris augue netus purus ipsum. Iaculis vitae gravida neque tristique nibh non habitasse velit fermentum. Cursus quis scelerisque mattis viverra diam at. Nam at sit auctor ac purus cras tempor scelerisque sed. Tincidunt elit ut ultrices risus cras proin ullamcorper. Congue non faucibus pretium diam non mattis in velit. Amet dignissim nisl viverra ultrices. Massa imperdiet tristique euismod at.</p>
			</div>
			<div className="flex flex-col gap-2">
				<h3 className='text-base font-medium'>Job Overview</h3>
				<p className='font-light text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum, molestie massa mauris augue netus purus ipsum. Iaculis vitae gravida neque tristique nibh non habitasse velit fermentum. Cursus quis scelerisque mattis viverra diam at. Nam at sit auctor ac purus cras tempor scelerisque sed. Tincidunt elit ut ultrices risus cras proin ullamcorper. Congue non faucibus pretium diam non mattis in velit. Amet dignissim nisl viverra ultrices. Massa imperdiet tristique euismod at.</p>
			</div>
			<div className="flex flex-col gap-2">
				<h3 className='text-base font-medium'>Job Overview</h3>
				<p className='font-light text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum, molestie massa mauris augue netus purus ipsum. Iaculis vitae gravida neque tristique nibh non habitasse velit fermentum. Cursus quis scelerisque mattis viverra diam at. Nam at sit auctor ac purus cras tempor scelerisque sed. Tincidunt elit ut ultrices risus cras proin ullamcorper. Congue non faucibus pretium diam non mattis in velit. Amet dignissim nisl viverra ultrices. Massa imperdiet tristique euismod at.</p>
			</div>

			<Button className='mt-2 w-fit py-1 px-4 text-smm font-medium' variant='job'>Apply For this Job</Button>
		</div>
    </div>
  )
}

export default JobDescription

JobDescription.defualtProps = {
	job: {
		companyName: 'hello',
		jobPosition: '',
		jobTags: [],
		jobOverview: '',
		jonResponsibilities: '',
		jobBenefits: '',
		
	},
}

JobDescription.propTypes = {
	job: PropTypes.object,
}