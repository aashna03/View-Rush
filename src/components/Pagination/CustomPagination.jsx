import React from "react";
import Pagination from '@mui/material/Pagination';

import { createTheme, ThemeProvider } from '@mui/material/styles';//

const theme	 = createTheme({
  palette: {
     mode: "dark",
  },
});

const CustomPagination = ({ setPage, numOfPages = 10}) => {
    // Scroll to top when page changes
    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
    };

    return (
        <div
        style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
            <ThemeProvider theme={theme}>
              <Pagination
              onChange={(e) => handlePageChange(e.target.textContent)}
              count={numOfPages}
              hideNextButton
              hidePrevButton
              sx={{ color: '#B87333' }}
              />
            </ThemeProvider>
        </div>
    )
}

export default CustomPagination