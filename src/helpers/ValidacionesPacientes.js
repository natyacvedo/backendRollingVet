const regExpNombreHum = /^[A-Za-z\s?]+$/;
const regExpEmail = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/;
const regExpTel = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]*$/;
const regExpNombre = /^[A-Za-z\s?]+$/;
const regExpEspecie = /^[A-Za-z\s?]+$/;
const regExpRaza = /^[A-Za-z\s?]+$/;
const regExpEdad = /[0-9]+$/;
const regExpTexto = /^[A-Za-z\s?]+$/;

export const validarNombreHum = (field) => {
    if (regExpNombreHum.test(field) && field.trim() !== "") {
      return true;
    } else {
      return false;
    }
  };
export const validarEmail = (field) => {
  if (regExpEmail.test(field) && field.trim() !== "") {
    return true;
  } else {
    return false;
  }
};

export const validarTel = (field) => {
  if (regExpTel.test(field) && field.trim() !== "") {
    return true;
  } else {
    return false;
  }
};

export const validarNombre = (field) => {
  if (regExpNombre.test(field) && field.trim() !== "") {
    return true;
  } else {
    return false;
  }
};

export const validarEspecie = (field) => {
  if (regExpEspecie.test(field) && field.trim() !== "") {
    return true;
  } else {
    return false;
  }
};

export const validarRaza = (field) => {
  if (regExpRaza.test(field) && field.trim() !== "") {
    return true;
  } else {
    return false;
  }
};

export const validarEdad = (field) => {
  if (
    regExpEdad.test(field) &&
    field.trim() !== "" &&
    field.trim() > 0 &&
    field.trim() < 100
  ) {
    return true;
  } else {
    return false;
  }
};

export const validarTexto = (field) => {
  if (regExpTexto.test(field) && field.trim() !== "") {
    return true;
  } else {
    return false;
  }
};