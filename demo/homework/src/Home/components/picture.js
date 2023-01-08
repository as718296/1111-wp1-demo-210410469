import Card from './card'
import './components.css'
import Banner from './banner'
const Picture = ({ listCard } ) =>{
    // console.log(listCard)
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
            // return {
            //     <Card
            //         name={}
            //     />
            // }
            
            
            
        }
        {/* <Card/> */}
        {/* <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/> */}
    </div>

}

export default Picture