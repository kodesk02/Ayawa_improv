import { Icon } from "@iconify/react";

interface IconProps {
    width: number,
    icon: string,
    label: string;
}

const Icons : React.FC<IconProps> = ({width, icon, label }) => {
    return (
        <div className="text-white space-y-3 ">
            <div>
                <Icon icon={icon} width={width}/>
            </div>
            <h3 className="text-2xl flex items-center justify-center">
                {label}
            </h3>
        </div>
    )
}

export default Icons