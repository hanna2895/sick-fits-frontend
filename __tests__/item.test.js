import ItemComponent from '../components/Item';
import { shallow } from 'enzyme';

const fakeItem = {
    id: 'ABC123',
    title: 'A Cool Item',
    price: 5000,
    description: 'This item is really cool!',
    image: 'dog.jpg',
    largeImage: 'largedog.jpg',
};

describe('<Item />', () => {
    // use enzyme shallow rendering
    it('renders the price tag properly', () => {
        const wrapper = shallow(<ItemComponent item={fakeItem}/>)
        // adding the .debug() method to the end of wrapper writes out all of the
        // html that would be rendered to the page from this react component
        // console.log(wrapper.debug())

        const PriceTag = wrapper.find('PriceTag');
        expect(PriceTag.children().text()).toBe('$50');

        expect(wrapper.find('Title a').text()).toBe(fakeItem.title);
    })

    it ('renders the image properly', () => {
        const wrapper = shallow(<ItemComponent item={fakeItem}/>)

        const img = wrapper.find('img');
        expect(img.props().src).toBe(fakeItem.image);
        expect(img.props().alt).toBe(fakeItem.title);
    })

    it('renders out the buttongs properly', () => {
        const wrapper = shallow(<ItemComponent item={fakeItem}/>)
        
        const buttonList = wrapper.find('.buttonList');
        expect(buttonList.children()).toHaveLength(3);
        expect(buttonList.find('Link')).toHaveLength(1);
        expect(buttonList.find('AddToCart')).toHaveLength(1);
        expect(buttonList.find('DeleteItem')).toHaveLength(1);
    })
})