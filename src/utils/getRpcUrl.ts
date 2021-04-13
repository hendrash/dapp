import random from 'lodash/random'
export const nodes = [process.env.REACT_APP_NODE_1, process.env.REACT_APP_NODE_2, process.env.REACT_APP_NODE_3]
const getNodeUrl=()=>{
    const randomIndex=random(0, nodes.length-1)
    return nodes[randomIndex]
}
export default getNodeUrl;