import plan from "../assets/images/floor/plan.png"

function useFloor() {
    const img = new Image()
    img.src = plan
    const width = img.width + 'px'
    const height = img.height + 'px'

    const apartments = [
        {
            width: "267px",
            height: "534px",
            top: "0px",
            left: "0px",
            points: "0 0,179px 0,179px 239px,258px 239px,258px 287px,267px 287px,267px 471px,267px 534px,0 534px",
            isSold: true,
            details: {
                size: 64,
                bedroom: 3,
                price: 60_000
            }
        },
        {
            top: "0px",
            left: "178px",
            width: "174px",
            height: "239px",
            isSold: false,
            details: {
                size: 64,
                bedroom: 3,
                price: 60_000
            }
        },
        {
            top: "0px",
            left: 178 + 174 + "px",
            width: "244px",
            height: "239px",
            isSold: true,
            details: {
                size: 64,
                bedroom: 3,
                price: 60_000
            }
        },
        {
            top: "0px",
            left: 178 + 174 + 244 + "px",
            width: "256px",
            height: "239px",
            isSold: Math.random() > 0.5,
            details: {
                size: 64,
                bedroom: 3,
                price: 60_000
            }
        },
        {
            top: 0,
            left: 178 + 174 + 244 + 256 + "px",
            width: "347px",
            height: "300px",
            points: "0 0,347px 0,347px 262px,236px 262px,236px 300px,179px 300px,179px 224px,126px 224px,126px 239px,0 239px",
            isSold: Math.random() > 0.5,
            details: {
                size: 64,
                bedroom: 3,
                price: 60_000
            }
        },
        {
            bottom: "0",
            right: "0",
            width: "265px",
            height: "311px",
            points: "0 15px,43px 15px,43px -1px,98px -1px,98px 76px,153px 76px,153px 37px,264px 37px,264px 311px,0 311px",
            isSold: Math.random() > 0.5,
            details: {
                size: 64,
                bedroom: 3,
                price: 60_000
            }
        },
        {
            bottom: "0",
            right: "349px",
            width: "246px",
            height: "247px",
            points: "0 0,183px 0,183px 75px,251px 75px,251px 180px,168px 180px,168px 247px,0 247px",
            isSold: Math.random() > 0.5,
            details: {
                size: 64,
                bedroom: 3,
                price: 60_000
            }
        },
        {
            bottom: "0",
            right: 349 + 246 + 'px',
            width: "257px",
            height: "247px",
            isSold: Math.random() > 0.5,
            details: {
                size: 64,
                bedroom: 3,
                price: 60_000
            }
        }
    ]

    return {width, height, apartments}
}

export default useFloor