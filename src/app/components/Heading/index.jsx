import speakerIcon from "../../assets/images/speaker-icon.svg"

import Image from "next/image";

export const Heading = () => {
    const icon = speakerIcon;

  return (
    <div>
        <h1>Consent Form for Data Processing</h1>
        <div>
            <Image
            src={icon}
            alt="screen reader button"
             />
        </div>
    </div>
  )
}
