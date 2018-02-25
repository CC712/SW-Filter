var  c = ['你妈逼','习近平', '蛤','傻逼' ,'共产党' ,'共产主义' ,'主席','毛泽东', '毛主席']
function makeHashMap(content){
	var map = {}
	content.forEach(w => {
		var root = map
		w = w.split('')
		
		w.forEach( l => {
			if(!root.hasOwnProperty(l)){
				root[l] = {}
			}
			root = root[l]
		})
		root._isEnd = true
	})
	return map
}
var test = "这是一段关键字测试，你好，你妈逼。傻逼 草泥马 习近平是 共产党的领导人，是致力于实现 共产主义"
function hashFilter (txt, doSomeFilter){
		var dic = makeHashMap(c)
		txt = txt.split('')
	var len = txt.length
	var head = 0,
		foot = 0,
		root = dic
	while(foot<len){
		var l = txt[head]
		if(root[l]){
			root = root[l]
			head++
		} else {
			foot++
			head = foot
		}
		if(root._isEnd){
			root = dic
			var hx = doSomeFilter(txt,head, foot)
			//console.log('after hx', hx.join(''))
			foot = head
		}
		
	}
	return txt.join('')
}
function filterRule(txt,right,left){
	for(left;left<right;left++)
			txt[left] = '*'
		
	return txt
}
//console.log(makeHashMap(c))
console.log(hashFilter(test, filterRule))