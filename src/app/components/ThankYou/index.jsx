import Image from 'next/image'
import checkActive from '../../../../public/checkActive.jpg';
import Link from 'next/link'

const ThankYou = () => {
    return (
        <>
            <div>
                <Image
                    src={checkActive}
                    alt='Icon of check being active'
                    weight={64}
                    height={51} />
                <h1>Thank you!</h1>
            </div>
            <p>Your consent form was successfully submitted. We appreciate your collaboration. Thank you!</p>
            <Link href= "https://jolint.com/">
                <button>Close</button>
            </Link>
        </>
    )
} 

export default ThankYou

