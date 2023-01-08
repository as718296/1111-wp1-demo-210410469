## 210410469 陶少煜
## 第一部分

### 1.1  提供 theme 來源 URL 及圖片:
Theme 來源網址: [王永昌鐘錶行](https://www.watchart.com/main/index.aspx)
Theme 截圖:
![](https://i.imgur.com/MkIBcQw.jpg)
### 1.2 theme 介紹:
本 Theme 可以拆分成以下部分
1. 側面 Menu，共可分成 7 個種類
![](https://i.imgur.com/MEsDFDc.png)
``` html=
<div className="left-content">
    <form className="input-form">
        <input type="text" className="search-input" placeholder="search..." />
    </form>
    <h4>王永昌鐘錶行</h4>
    <article className="companies">
        <button className="company-btn" onClick={() => allChange('All')}>All</button>
        <button className="company-btn" onClick={() => allChange('AC1500')}>AC1500.</button>
        <button className="company-btn" onClick={() => allChange('AC1392')}>AC1392.</button>
        <button className="company-btn" onClick={() => allChange('AC1395')}>AC1395.</button>
        <button className="company-btn" onClick={() => allChange('AC0037')}>AC0037.</button>
        <button className="company-btn" onClick={() => allChange('AB7614')}>AB7614.</button>
        <button className="company-btn" onClick={() => allChange('AB3112')}>AB3112.</button>
    </article>
    <div className='twotwo'>
        <button className="company-btn-one" onClick={() => allChange('clear')}>Clear All</button>
        <button className="company-btn-two" onClick={() => allChange('All')}>Fetch All</button>
    </div>
/div>
```
2. 卡片區，可顯示產品圖片、名稱
![](https://i.imgur.com/bvQwFoE.png)
``` html=
import './components.css'

const Card = ({name, image_path}) =>{
    return <div>
        <div className="card">
        {/* <img src="img_avatar.png" alt="Avatar" style="width:100%"> AB3112*/}
        <img src={require(`./image/${name}.jpg`)} alt="Logo"/>
        <div className="container">
            <h4><b></b></h4> 
            <p>{`${name}`}</p> 
        </div>
        </div>
    </div>
}
export default Card
```

## 第三部分
### 3.1  篩選手錶功能
![](https://i.imgur.com/6KS4ZLQ.png)
![](https://i.imgur.com/sAxRR7s.png)
![](https://i.imgur.com/1RKMo5m.png)
![](https://i.imgur.com/F7jT0yo.png)
``` html=
import Card from './card'
import './components.css'
import Banner from './banner'
const Picture = ({ listCard } ) =>{
    return <div className='filter-right'>
    {
        listCard.map(item =>{
            if(item['value'] === 'All'){
                return (
                    <div className='filter-right'>
                        <Card 
                            name={'AC1500'}
                        /><Card 
                            name={'AC1392'}
                        />
                        <Card 
                            name={'AC1395'}
                        />
                        <Card 
                            name={'AC0037'}
                        />
                        <Card 
                            name={'AB7614'}
                        />
                        <Card 
                            name={'AB3112'}
                        />
                    </div>
                )
            }
            if (item['value'] === 'clear'){
                return (
                    <div className='filter-right'>
                        <Banner />
                    </div>
                )
            }
            return (
                <Card 
                    name = {item['value']}
                />
            )
        })           
    }
    </div>
}
export default Picture
```

### 3.2  清除和取得車款功能
![](https://i.imgur.com/wAgAH7u.png)
![](https://i.imgur.com/s9TX2t6.png)
``` html=
<div className='twotwo'>
    <button className="company-btn-one" onClick={() => allChange('clear')}>Clear All</button>
    <button className="company-btn-two" onClick={() => allChange('All')}>Fetch All</button>
</div>
```
``` html=
if (item['value'] === 'clear'){
    return (
        <div className='filter-right'>
            <Banner />
        </div>
    )
}
```
``` html=
import './components.css'

const Banner = () =>{
    return <div >
        <p className='delete'>All Product delete</p>
    </div>
}

export default Banner
```




















