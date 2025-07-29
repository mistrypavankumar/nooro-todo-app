import React from "react";
import "./Loader.css";

export default function Loader(): React.ReactElement {
  return (
    <div className="main__container">
      <div className="area1">
        {Array.from({ length: 10 }, (_, i) => (
          <div
            key={`area1-${i + 1}`}
            className="area1__dot"
            style={{ ["--i"]: `${i + 1}` } as React.CSSProperties}
          ></div>
        ))}
        <div className="area1__dot center"></div>

        <div className="area2">
          {Array.from({ length: 10 }, (_, i) => (
            <div
              key={`area2-${i + 1}`}
              className="area2__dot"
              style={{ ["--i"]: `${i + 1}` } as React.CSSProperties}
            ></div>
          ))}

          <div className="area3">
            {Array.from({ length: 10 }, (_, i) => (
              <div
                key={`area3-${i + 1}`}
                className="area3__dot"
                style={{ ["--i"]: `${i + 1}` } as React.CSSProperties}
              ></div>
            ))}

            <div className="area4">
              {Array.from({ length: 10 }, (_, i) => (
                <div
                  key={`area4-${i + 1}`}
                  className="area4__dot"
                  style={{ ["--i"]: `${i + 1}` } as React.CSSProperties}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
