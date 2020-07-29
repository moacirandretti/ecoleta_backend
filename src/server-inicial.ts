import express, { response, request } from 'express'
// import routes from './routes'

const app = express()

app.use(express.json())
// app.use(routes)

// app.get('/users:id', (request, response) => {
// 	console.log('Listagem de usuários')

// 	// essa lista é somente até fazer o banco de dados

// 	return response.json(users)
// })

const users = ['Moacir', 'Giovanni', 'Hugo']

app.get('/users/:id', (request, response) => {
	const id = Number(request.params.id)

	const user = users[id]

	return response.json(user)
})

app.get('/users/', (request, response) => {
	const search = String(request.query.search)

	const filteredUsers = search
		? users.filter((user) => user.includes(search))
		: users

	return response.json(filteredUsers)
})

app.post('/users', (request, response) => {
	const data = request.body

	return response.json({
		Nome: data.name,
		Usuário: data.user,
		Cidade: data.city
	})
})

app.listen(3333, () => {
	console.log('💥🚀 Servidor Funfando na porta 3333!')
})
