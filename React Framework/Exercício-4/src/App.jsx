import { useState } from "react";
import { Button } from "./components/Button";
import { copy, randomPassword } from "./components/functions/randomPassword";
import { Input } from "./components/Input";

export function App() {
  const [password, setPassword] = useState("")
  const [copyStatus, setCopyStatus] = useState("Copiar")
  const [customSize, setCustomSize] = useState("12")
  const [passwordSizeBox, setPasswordSizeBox] = useState(false)
  
  const passwordSize = passwordSizeBox ? customSize : 12


  function copyComplete(password){
    copy(password)
    if (password){
      setCopyStatus("Copiado")
    }
  }

  function passwordFunction(passwordSize){
    setPassword(randomPassword(passwordSize))
    setCopyStatus("Copiar")
  }

  return (
    <>
    <h1>Gerador de Senhas</h1>
    <p>Gere uma senha aleátoria de {passwordSize} caracteres! 💻🔑</p>
    <div>
      <label htmlFor="passwordSizeBox">Custom Size:</label>
      <input type="checkbox" id="passwordSizeBox" value={passwordSizeBox} onChange={() => setPasswordSizeBox(currentValue => !currentValue)}/>
    </div>
    {passwordSizeBox &&(
      <div>
        <label htmlFor="passwordSize">Tamanho:</label>
        <Input passwordSize={passwordSize} setPasswordSize={setCustomSize}/>
      </div>
    )}
    <Button text="Gerar" functionBtn={() => passwordFunction(passwordSize)} />
    <Button text={copyStatus} functionBtn={() => copyComplete(password)} />
    <p>{password}</p>
    </>
  )
}
