import { createI18n } from 'vue-i18n'
import en from '../locales/en.json'
import fr from '../locales/fr.json'

// Fonction pour détecter la langue du navigateur
function getBrowserLocale(): string {
  const navigatorLocale = navigator.language || (navigator.languages?.[0]) || 'en'

  // Extraire le code de langue (ex: 'fr-FR' -> 'fr')
  const locale = navigatorLocale.substring(0, 2)

  // Vérifier si la langue est supportée, sinon utiliser l'anglais par défaut
  return ['en', 'fr'].includes(locale) ? locale : 'en'
}

// Fonction pour récupérer la langue sauvegardée
function getStoredLocale(): string {
  return localStorage.getItem('jbloup-locale') || getBrowserLocale()
}

// Fonction pour sauvegarder la langue
function setStoredLocale(locale: string): void {
  localStorage.setItem('jbloup-locale', locale)
}

const i18n = createI18n({
  legacy: false,
  locale: getStoredLocale(),
  fallbackLocale: 'en',
  messages: {
    en,
    fr
  }
})

// Exporter les fonctions utilitaires
export { setStoredLocale, getBrowserLocale }
export default i18n
