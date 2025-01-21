# Abstand eines Punktes zu einer Ebene
$$P(9|-9|4)$$
$$E:2x-y+2z=8$$

## Lotfußpunktverfahren

### 1. Geradengleichung bilden
$$g:\vec{x}=\vec{OP}+r\cdot \vec{n}$$
$$g:\vec{x}=\left(\begin{array}{c} 9 \\\\ -9 \\\\ 4 \end{array}\right)+r\cdot\left(\begin{array}{c} 2 \\\\ -1 \\\\ 2 \end{array}\right)$$

### 2. Schnittpunkt der Geraden und Ebene berechnen
$$2(9+2r)-(-9-r)+2(4+2r)=8$$
$$18+4r+9+r+8+4r=8$$
$$35+9r=8$$
$$9r=-27$$
$$r=-3$$

$$S(3|-6|-2)$$

### 3. Betrag vom Vektor PS bilden
$$\vec{PS}=\left(\begin{array}{c} -6 \\\\ 3 \\\\ -6 \end{array}\right)$$
$$|\vec{PS}|=\sqrt{(-6)^2+(3)^2+(-6)^2}=\sqrt{36+9+36}=\sqrt{81}=9$$

## Hessische Normalform

### 1. Punkt und Ebene in die Formel einsetzen
$$P(p_1|p_2|p_3)$$
$$E:a_1x+a_2y+a_3z=k$$
$$d(P,E)=|\frac{a_1p_1+a_2p_2+a_3p_3-k}{\sqrt{(a_1)^2+(a_2)^2+(a_3)^2}}|$$
$$d(P,E)=|\frac{(2)(9)+(-1)(-9)+(2)(4)-8}{\sqrt{(2)^2+(-1)^2+(2)^2}}|$$
$$d(P,E)=|\frac{18+9+8-8}{\sqrt{4+1+4}}|$$
$$d(P,E)=|\frac{27}{\sqrt{9}}|$$
$$d(P,E)=|\frac{27}{3}|=9$$