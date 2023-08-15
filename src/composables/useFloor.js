import plan from "../assets/images/floor/plan.png";
import corridor from "../assets/images/floor/corridor.png";
import getImageTwClasses from "../helper/getImageTwClasses";

function useFloor() {
    const img = new Image();
    img.src = plan;
    const _plan = {
        width: img.width,
        height: img.height
    };

    const flat = getImageTwClasses();

    return {
        flat,
        corridor,
        _plan,
    };
}

export default useFloor;