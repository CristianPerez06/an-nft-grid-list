export interface XIconProps {
  size?: number
}

type Comp = (props: XIconProps) => JSX.Element

const XIcon: Comp = (props) => {
  const { size = 50 } = props

  return (
    <svg fill={'transparent'} width={size} height={size} viewBox="0 0 24 24">
      <g clipPath="url(#clip0_429_11081)">
        <circle
          cx="12"
          cy="11.9999"
          r="9"
          stroke="#5e58a5"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 10.0001L10 14.0001"
          stroke="#5e58a5"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 10.0001L14 14.0001"
          stroke="#5e58a5"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_429_11081">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default XIcon
