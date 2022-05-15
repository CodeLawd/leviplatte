import React, { SVGProps } from 'react'

interface Props {
  bgColor: string
  text: string
  textColor: string
  //   Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
}

const Button = ({ bgColor, textColor, text }: Props) => {
  return (
    <div>
      {/* <Icon className="h-6 w-6" /> */}
      <button
        className={`bg-${bgColor} text-${textColor} mb-4 w-full rounded-full py-3 font-medium uppercase hover:bg-leviplatteDark`}
      >
        {text}

        {/* <User /> */}
      </button>
    </div>
  )
}

export default Button
