import React, { useState } from "react";
import  AccordionItem  from "./accordionItem";
import { Ul } from "../../styled";
import { StyledLi } from "./styles";

export function Accordion({
  titleComponent, // компонент для отрисовки заголовка
  textComponent, // компонент для отрисовки текста
  content, // массив, содержащий контент аккордеона
  isHtml // есть ли HTML в текста
}) {
  const [openItemindex, setOpenitemIndex] = useState(null);

  return (
    <Ul>
      {content.map((item, index) => (
        <StyledLi key={item.id}>
          <AccordionItem
          titleComponent={titleComponent}
          textComponent={textComponent}
          title={item.title}
          text={item.description}
          open={index === openItemindex}
          onClick={() => {
            setOpenitemIndex(index !== openItemindex ? index : null);
          }}
          isHtml={isHtml}
          />
          </StyledLi>
      ))}
    </Ul>
  );
}

export default AccordionItem;