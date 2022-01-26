import React from 'react';
import style from './Step1.module.css'

const Step1 = () => {
    // здесь нет функциональности, и єто стрелочная функция, поєтому можно переписать без return
    return (
        // ненужное использование фрагмента
        <>
            <div className={style.mainBlockTitle}>
                <h2>Crea tu Password Manager</h2>
                <hr/>
                <div className={style.imageGeneralBlock}>
                    <div className={style.imageBlock}>
                        <img src="https://i.ibb.co/DrBWVqK/head.png" alt="head" border="0"/>
                        <p>
                            Guarda aquí todas tus contraseñas, datos
                            o cualquier información, olvida las notas
                            de papel y las aplicaciones no proteaidas.
                        </p>
                    </div>
                    <div className={style.imageBlock}>
                        <img src="https://i.ibb.co/tcLcvXK/lock.png" alt="lock" border="0"/>
                        <p>
                            Crea tu clave maestra: solo tú podrás
                            acceder a tus secretos con ella.
                        </p>
                    </div>
                </div>
                <div>
                    <h3>Cómo funciona</h3>
                    <p>
                        En primer lugar, debes crear una contraseña diferente para sus pertenencias electrónicas. No
                        podrás
                        recuperar tu contraseña, así que recuérdela bien.
                    </p>
                    <h3>Qué datos puedes guardar</h3>
                    <p>
                        Por ejemplo, el número de tu tarjeta, el PIN y el PUK de tu teléfono móvil, el número de
                        serie de
                        alguno de
                        tus dispositivos o cualquier información que necesites tener en lugar seguro.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Step1;
