import { FC, useEffect } from "react";
import { withRouter, usePrevious } from "../hooks/index";


type ScrollToTopProps = {
    location: string,
    children: any
}
const ScrollToTop: FC<ScrollToTopProps> = ({location, children}) => {
  const prevLocation = usePrevious(location)
  useEffect(() => {
      if (location !== prevLocation) {
        window.scrollTo(0, 0);
      }
  }, [location, prevLocation])


    return (children);
}

export default withRouter<ScrollToTopProps>(ScrollToTop);
