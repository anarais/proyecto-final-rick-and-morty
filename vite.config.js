import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/proyecto-final-rick-and-morty/', // importante: reemplazá con el nombre de tu repo
  plugins: [react()],
})