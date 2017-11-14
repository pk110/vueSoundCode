// 测面滑动菜单效果
const havenSign = '已签名'

const home = {
	state: {
       sign:'大帅比'
	},
	mutations: {
		getData (state) {
			state.sign = havenSign
		},
		// 点击请求接口  这种是大型项目里用这种方式
		getApi(){
			fetch('http://m.maoyan.com/movie/list.json?type=hot&offset=0&limit=1000')
				.then(function (response) {
				console.log(response);
			})
				.catch(function (error) {
				console.log(error);
			});
		}
	},
	actions: {
		getData ({commit}) {
			commit('getData')
		},
		getApi ({commit}) {
			commit('getApi')
		}
	},
	getters: {
		
	}
}
export default home
