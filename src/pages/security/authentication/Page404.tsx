import React from "react";
import { Link } from "react-router-dom";

import { Button } from "@mui/material";

const Page404 = () => (
  <div className="text-center">
    <h1 className="display-1 font-weight-bold">404</h1>
    <p className="h1">Page not found.</p>
    <p className="h2 font-weight-normal mt-3 mb-4">
      The page you are looking for might have been removed.
    </p>
    <Link to="/dashboard/default">
      <Button color="primary" >
        Return to website
      </Button>
    </Link>
  </div>
);

export default Page404;
