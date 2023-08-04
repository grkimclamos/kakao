import React from "react";
interface CardProps {
  width?: number;
  height?: number;
  title?: string;
  contents?: string;
  img?: string;
  tag?: string[];
  date?: string;
  fontSize?: number;
  sticky?: boolean;
  fade?: boolean;
  index?: number;
}
const Card = (props: CardProps) => {
  const {
    width,
    height,
    sticky,
    title,
    contents,
    img,
    fontSize,
    tag,
    date,
    fade,
  } = props;
  return (
    <div
      className={fade ? "card cardFade" : "card"}
      style={{
        width: `${width}px`,
        maxHeight: `${height}px`,
        overflow: "hidden",
        top: sticky ? "100px" : "",
        position: sticky ? "sticky" : "relative",
      }}
    >
      <span className="span_wrap">
        <span className="card_title">
          <span className="card_name">{title}</span>
          <span className="card_date">{date}</span>
        </span>
        <h1
          className="card_contents"
          style={{
            fontSize: `${fontSize}rem`,
            lineHeight: `${Number(fontSize) + 0.4}rem`,
          }}
        >
          {contents}
        </h1>
        <span className="card_tag">
          {tag ? (
            tag.map((el: string, index: number) => <>#{el}&nbsp;</>)
          ) : (
            <></>
          )}
        </span>
      </span>
      {img ? (
        <img
          src={img}
          alt="err"
          style={{
            width: "100%",
            height: "100%",
            display: "block",
            overflow: "clip",
            overflowClipMargin: "content-box",
          }}
        />
      ) : (
        <></>
      )}
    </div>
  );
};
export default Card;
