import "./App.css";
import { useState, useEffect } from "react";
import React from "react";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

function App() {
  const [price, setPrice] = useState("");
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  if (checked) {
    localStorage.setItem("mcost", "48.00");
  }

  var mcost;
  var views;

  useEffect(() => {
    localStorage.setItem("mcost", "16.00");
    localStorage.setItem("views", "100K");
  });

  if (price === "20") {
    views = "10K";
    if (checked === true) {
      mcost = 8 * 12 * (25 / 100) + ".00";
    } else {
      mcost = "8.00";
    }
    localStorage.setItem("views", views);
    localStorage.setItem("mcost", mcost);
  } else if (price === "40") {
    views = "50K";
    if (checked === true) {
      mcost = 12 * 12 * (25 / 100) + ".00";
    } else {
      mcost = "12.00";
    }

    localStorage.setItem("views", views);
    localStorage.setItem("mcost", mcost);
  } else if (price === "60") {
    views = "100K";
    if (checked === true) {
      mcost = 16 * 12 * (25 / 100) + ".00";
    } else {
      mcost = "16.00";
    }

    localStorage.setItem("views", views);
    localStorage.setItem("mcost", mcost);
  } else if (price === "80") {
    views = "500K";
    if (checked === true) {
      mcost = 24 * 12 * (25 / 100) + ".00";
    } else {
      mcost = "24.00";
    }

    localStorage.setItem("views", views);
    localStorage.setItem("mcost", mcost);
  } else if (price === "100") {
    views = "1M";
    if (checked === true) {
      mcost = 36 * 12 * (25 / 100) + ".00";
    } else {
      mcost = "36.00";
    }

    localStorage.setItem("views", views);
    localStorage.setItem("mcost", mcost);
  }

  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 15,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(9px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 2,
      "&.Mui-checked": {
        transform: "translateX(12px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#177ddc" : "hsl(174, 77%, 80%)",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,.35)"
          : "hsl(223, 50%, 87%)",
      boxSizing: "border-box",
    },
  }));
  useEffect(() => {
    console.log(price);

    document.getElementById("slider").oninput = function () {
      var value = ((this.value - this.min) / (this.max - this.min)) * 100;
      this.style.background =
        "linear-gradient(to right, hsl(174, 77%, 80%) 0%,  hsl(174, 77%, 80%) " +
        value +
        "%, hsl(223, 50%, 87%) " +
        value +
        "%, hsl(223, 50%, 87%) 100%)";
    };
  });
  return (
    <div className="App">
      <div className="content">
        <img src="/pattern-circles.svg" className="logo" alt="logo" />
        <h3 className="title">Simple, traffic-based pricing</h3>
        <p className="caption">
          Sign-up for our 30-day trail. No credit card required.
        </p>

        <div className="card">
          <div className="flex">
            <p className="views">{localStorage.getItem("views")} PAGEVIEWS</p>

            <p>
              <span className="amount">${localStorage.getItem("mcost")}</span>
              <span className="mnth-amount"> /month</span>
            </p>
          </div>

          <FormGroup>
            <input
              className="slider"
              id="slider"
              type="range"
              min="20"
              max="100"
              step="20"
              onChange={(e) => setPrice(e.target.value)}
            />

            <div className="toggle-con">
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography
                  style={{
                    fontSize: "10px",
                    fontWeight: "600",
                    color: "hsl(225, 20%, 60%)",
                    fontFamily: "Manrope",
                  }}
                >
                  Monthly Billing
                </Typography>
                <AntSwitch
                  inputProps={{ "aria-label": "ant design" }}
                  checked={checked}
                  onChange={handleChange}
                />
                <Typography
                  style={{
                    fontSize: "10px",
                    fontWeight: "600",
                    color: "hsl(225, 20%, 60%)",
                    fontFamily: "Manrope",
                  }}
                >
                  Yearly Billing
                </Typography>
                <p className="discount">25% discount</p>
              </Stack>
            </div>
            <div className="line"></div>
            <div className="flex-2">
              <ul className="list">
                <li>
                  <img className="tick" src="/icon-check.svg" alt="tick" />
                  Unlimted websites
                </li>
                <li>
                  <img className="tick" src="/icon-check.svg" alt="tick" />
                  100% data ownership
                </li>
                <li>
                  <img className="tick" src="/icon-check.svg" alt="tick" />
                  Email reports
                </li>
              </ul>
              <button className="btn">Start my trail</button>
            </div>
          </FormGroup>
        </div>
      </div>
    </div>
  );
}

export default App;
