/**
 * save a document MongoDB
 * @param  {object} document - the document need to save
 * @return {[type]} `{ ok: boolean, msg: string }`
 */
export const save = async document => {
	try {
		await document.save()
		return { ok: true, msg: '保存成功' }
	}catch (err) {
		return { ok: false, msg: '保存失败' }
	}
}

/**
 * update a document
 * @param  {object} ctx - the model
 * @param  {object} model - document need to save
 * @return {object} `{ok: boolean, msg: string}`
 */
export const update = async (model, document) => {
	try {
		await model.findByIdAndUpdate(document._id, { ...document })
		return { ok: true, msg: '更新成功' }
	} catch (err) {
		return { ok: false, msg: '更新失败' }
	}
}

/**
 * remove a document
 * @param  {object} ctx - the model
 * @param  {[type]} id  - the document id
 * @return {[type]} `{ ok: boolean, msg: string }`
 */
export const remove = async (model, id) => {
	try {
		await model.findByIdAndRemove(id).exec()
		return { ok: true, msg: '删除成功' }
	} catch (err) {
		return { ok: false, msg: '删除失败' }
	}
}

/**
 * find all documents from a model
 * @param  {object} model - the model of the documents need to find
 * @param  {object} name  - the result key name
 * @return {object} `{ ok: boolean, msg: string }`
 */
export const findAll = async (model, name) => {
	try {
		let res = await model.find({})
		return { ok: true, msg: '', [name]: res }
	} catch (err) {
		return { ok: false, msg: '查询失败', [name]:[] }
	}
}

/**
 * find all documents from a model
 * @param  {object} model - the model of the documents need to find
 * @param  {object} name  - the result key name
 * @return {object} `{ ok: boolean, msg: string }`
 */
export const findByPage = async (model, query, page, name) => {
	try {
		let res = await model.paginate(query, {
			page,
			limit: 15,
			sort: { createdAt: -1 }
		})
		return { ok: true, msg: '', [name]:res }
	} catch (err) {
		return { ok: false, msg: '查询失败', [name]: [] }
	}
}

/**
 * find a document by ObjectId
 * @param  {object} model - the model of the document need to find
 * @param  {object} id - _id of document 
 * @param  {object} name - the result key name
 * @return {object} `{ ok: boolean, msg: string }`
 */
export const findById = async (model, id, name) => {
	try {
		let res = await model.findOne({ _id: id }).exec()
		return { ok: true, msg:'', [name]:res }
	} catch (err) {
		return { ok: false, msg: '查询失败', [name]: null }
	}
}