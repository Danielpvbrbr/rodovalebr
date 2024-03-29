import React, { useState,useRef,useEffect } from "react";
import { Container, Area, AreaTitle, AreaBody, Title, Name, Input, AreaControl, AreaInfo, ImgInfo, NameSpecial } from './styles';
import rosa from "./Img/rosa.png";
import panda from "./Img/panda.png";
import bone from "./Img/bone.png";
import { BsFillStarFill } from "react-icons/bs";

const Main = () => {
  const scroll = useRef(null)
  const [title, setTitle] = useState("Live");
  const [isTitle, setIsTitle] = useState(true);
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const [gift, setGift] = useState(false);
  const [type, setType] = useState(1);

  const Send = (e) => {
    if (e.keyCode === 13 && name.length > 0) {
      setName("")
      setList([...list, {
        name: name,
        gift: gift,
        type: type
      }]);
    }
  };

  const buttonFlower = () => {
    if (name.length > 0) {
      setName("")
      setList([...list, {
        name: `${name} 🧡`,
        gift: gift,
        type: 1
      }]);
    }
  };

  const buttonPanda = () => {
    if (name.length > 0) {
      setName("")
      setList([...list, {
        name: name,
        gift: gift,
        type: 2
      }]);
    }
  };
  const scrollToBottom = () => {
    scroll.current?.scrollIntoView({ behavior: "smooth" })
}

useEffect(() => {
    scrollToBottom();
}, [list]);

  return (
    <Container>
      <Area>
        <AreaTitle>
          {isTitle ?
            <Title onClick={() => setIsTitle(false)}>{title.length < 1 ? "Escreva seu nome" : title}</Title>
            :
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              onKeyDown={e => e.keyCode === 13 && setIsTitle(true)} />
          }
        </AreaTitle>
        <AreaBody>
          {list.map((v, i) =>
            v.type === 2 ?
              <NameSpecial>{i = 1 + i++}. {v.name}  <BsFillStarFill color="#FFFF00" /></NameSpecial>
              :
              <Name>{i = 1 + i++}. {v.name}</Name>
          )}
          <Input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Digite o nome......"
            onKeyDown={e => Send(e)}
          />
        </AreaBody>
        <AreaControl>
          <AreaInfo>
            <ImgInfo onClick={buttonFlower}>
              <img src={rosa} alt="flor" />
              <h4> =  Nome</h4>
            </ImgInfo>

            <ImgInfo onClick={buttonPanda}>
              <img src={panda} alt="panda" />
              <h4> = Nome Em Destaque</h4>
            </ImgInfo>

            <ImgInfo onClick={() => setList([])}>
              <img src={bone} alt="bone" />
              <h4> = Limpar Ludo</h4>
            </ImgInfo>
          </AreaInfo>
        </AreaControl>
      </Area>
    </Container>
  )
};

export default Main;