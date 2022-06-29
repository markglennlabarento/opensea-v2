import {BsCreditCard2FrontFill, BsFillTagFill} from 'react-icons/bs'
import {AiOutlineQuestionCircle, AiOutlineClockCircle} from 'react-icons/ai'
import Image from 'next/image'

const style = {
  wrapper: `flex flex-col divide-y border divide-black rounded-lg border-black`,
  header: `flex flex-col items-left justify-between rounded-t-lg px-30 py-4 bg-[#262a30]`,
  headerContent: `flex items-left space-x-2`,
  headerIcon: `h-6 w-6`,
  greyText: `text-grey-400`,
  mainContainer: `space-y-4 rounded-b-lg px-6 py-4 bg-[#313339]`,
  priceInfoContainer: `space-y-1`,
  mediumFont: `font-medium`,
  priceContainer: `flex items-left space-x-2`,
  price: `text-3xl font-bold`,
  buttonsContainer: `flex space-x-4`,
  button: `flex 2-[14rem] items-left cursor-pointer space-x-4 rounded-lg py-2 text-white`,
  purchaseButton: `bg-blue-500`,
  offerButton: `border border-black bg-[#363840]`,
  buttonIcon: `h-6 w-6`
}

const NFTSalesInfo = ({price, buyNFT}) => {
  return(
  <div className = {style.wrapper}>
    <div className = {style.header}>
      <div className = {style.headerContent}>
        <AiOutlineClockCircle className = {`${style.greyText} ${style.headerIcon}`}/>

        <div className = {style.greyText}>
          Sales ends June 1, 2022 at 8:20pm GMT-7
        </div>
       </div>


      <div className= {style.mainContainer}>
        <div className = {style.priceInfoContainer}>
          <div className = {`${style.greyText} ${style.mediumFont}`}>Buy at</div>

          <div className ={style.priceContainer}>
            <Image 
              src = '/weth-logo.svg'
              width = {24}
              height = {24}
              alt = 'weth'
            />
            <span className = {style.price}>{price}</span>
          </div>
      </div>

        <div className = {style.buttonsContainer}>
          <div
            className = {`${style.button} ${style.purchaseButton}`}
            onClick = {buyNFT}
            >
            <BsCreditCard2FrontFill className = {style.buttonIcon} />
            <span className = 'text-lg font-semibold'>Buy Now</span>
          </div>
          <div className = {`${style.button} ${style.offerButton}`}>
            <BsFillTagFill className = {style.butoonIcon} />
            <span className = 'text-lg font-semibold'>Make Offer</span>
          </div>
        </div>
      </div>
    </div>
  </div>)
}

export default NFTSalesInfo