// Global state
let currentLanguage = "pt";
let currentTheme = "light";
let currentFontSize = 14;
let chatState = {
  step: "initial",
  userData: {},
  donationAmount: null,
  isAnonymous: false,
};

// Translations
const translations = {
  pt: {
    hero_title: "Salvando vidas peludas com sua ajuda",
    hero_subtitle:
      "Conheça Nina, nossa assistente que tornará sua doação simples e significativa",
    start_chat: "💬 Conversar com Nina",
    learn_more: "📖 Saber Mais",
    our_mission: "Nossa Missão",
    success_stories: "Histórias de Sucesso",
    how_it_works: "Como Funciona",
    admin_dashboard: "Dashboard Admin",
    greeting:
      "Olá! Eu sou a Nina 🐾, assistente virtual da ONG Amigos Peludos. Estou aqui para ajudar você a fazer a diferença na vida de cães e gatos abandonados!",
    lgpd_message:
      "Antes de começarmos, preciso informar sobre nossa política de dados: coletamos apenas informações necessárias para processar sua doação e manter contato sobre nossos resgates. Seus dados são protegidos conforme a LGPD. Você concorda em prosseguir?",
    lgpd_agree: "✅ Concordo e quero ajudar",
    lgpd_decline: "❌ Não concordo",
    presentation:
      "Que alegria ter você aqui! 🥰 \n\nA ONG Amigos Peludos trabalha há 8 anos resgatando, cuidando e encontrando lares amorosos para animais em situação de abandono. \n\nJá resgatamos 1.247 animais e conseguimos 892 adoções! \n\nCada doação, por menor que seja, salva vidas. Vamos juntos nessa missão?",
    continue: "💝 Quero ajudar!",
    data_collection:
      "Perfeito! Para personalizar sua experiência e manter você informado sobre nossos resgates, gostaria de saber:",
    ask_name: "Qual seu nome completo?",
    ask_phone: "Qual seu telefone? (formato: 11999999999)",
    ask_age: "Qual sua idade?",
    anonymous_option: "🤐 Prefiro doar anonimamente",
    invalid_phone:
      "Por favor, digite um telefone válido (apenas números, com DDD)",
    invalid_age: "Por favor, digite uma idade válida (entre 18 e 120 anos)",
    donation_appeal:
      "que bom ter você conosco! 💕\n\nCada real doado tem um impacto direto:\n\n• R$ 5 alimenta um cãozinho por 2 dias\n• R$ 10 paga a vacina de um filhote\n• R$ 15 alimenta um cãozinho por uma semana\n• R$ 25 cobre cuidados veterinários básicos\n• R$ 50 paga um kit completo de castração\n• R$ 100 permite um resgate de emergência\n\nQual valor tocou seu coração?",
    custom_amount: "💝 Valor que toca meu coração",
    ask_custom_amount:
      "Digite o valor que você gostaria de doar (apenas números):",
    invalid_amount: "Por favor, digite um valor válido (mínimo R$ 1)",
    payment_method:
      "Você escolheu doar R$ {amount}! 🙏\n\nEscolha como prefere doar:",
    pix_payment: "💳 PIX (instantâneo)",
    other_payment: "🏦 Outros métodos",
    pix_generated:
      "Seu PIX foi gerado! 🎉\n\nPara doar R$ {amount}, use o código abaixo:",
    pix_instructions:
      "1. Copie o código PIX\n2. Abra seu banco ou app de pagamentos\n3. Cole o código e confirme\n4. Sua doação ajudará imediatamente! 🐾",
    copy_pix: "📋 Copiar código PIX",
    pix_copied: "Código copiado! ✅",
    donation_confirmed:
      "Doação confirmada! 🎉\n\nObrigada, {name}! Sua generosidade de R$ {amount} já está fazendo a diferença!\n\nVou te mostrar alguns dos nossos resgates que foram possíveis graças a pessoas como você! 📸",
    success_story_1:
      "Esta é Luna! 🐕\nChegou desnutrida e assustada há 3 meses. Hoje brinca feliz com sua nova família! Sua doação ajuda histórias como essa acontecerem. ❤️",
    success_story_2:
      "Conheça Max! 🦮\nEle estava ferido nas ruas há 6 meses. Agora é o rei da casa dos seus novos tutores! Cada doação permite esse tipo de transformação.",
    success_story_3:
      "Essa é nossa Mel! 🐕‍🦺\nEra muito tímida e desconfiada há 1 ano. Hoje é a mais carinhosa da sua nova casa! Juntos, salvamos vidas!",
    final_thanks:
      "Muito obrigada por fazer parte da nossa família de doadores! 💝\n\nVocê receberá atualizações sobre como sua doação está ajudando nossos peludinhos.\n\nJuntos, salvamos vidas! 🐾✨\n\n¿Gostaria de conhecer mais sobre nosso trabalho ou fazer outra doação?",
    more_info: "📚 Quero saber mais",
    donate_again: "💖 Doar novamente",
    type_message: "Digite sua mensagem...",
    send: "Enviar",
  },
  en: {
    hero_title: "Saving furry lives with your help",
    hero_subtitle:
      "Meet Nina, our assistant who will make your donation simple and meaningful",
    start_chat: "💬 Chat with Nina",
    learn_more: "📖 Learn More",
    our_mission: "Our Mission",
    success_stories: "Success Stories",
    how_it_works: "How It Works",
    admin_dashboard: "Admin Dashboard",
    greeting:
      "Hello! I'm Nina 🐾, virtual assistant from Friends with Paws NGO. I'm here to help you make a difference in the lives of abandoned dogs and cats!",
    lgpd_message:
      "Before we start, I need to inform you about our data policy: we only collect information necessary to process your donation and keep in touch about our rescues. Your data is protected according to LGPD. Do you agree to proceed?",
    lgpd_agree: "✅ I agree and want to help",
    lgpd_decline: "❌ I don't agree",
    presentation:
      "How wonderful to have you here! 🥰 \n\nFriends with Paws NGO has been working for 8 years rescuing, caring for and finding loving homes for abandoned animals. \n\nWe've already rescued 1,247 animals and achieved 892 adoptions! \n\nEvery donation, no matter how small, saves lives. Let's join this mission together?",
    continue: "💝 I want to help!",
    data_collection:
      "Perfect! To personalize your experience and keep you informed about our rescues, I'd like to know:",
    ask_name: "What's your full name?",
    ask_phone: "What's your phone number? (format: 11999999999)",
    ask_age: "How old are you?",
    anonymous_option: "🤐 I prefer to donate anonymously",
    invalid_phone:
      "Please enter a valid phone number (numbers only, with area code)",
    invalid_age: "Please enter a valid age (between 18 and 120 years)",
    donation_appeal:
      "so good to have you with us! 💕\n\nEvery dollar donated has a direct impact:\n\n• $5 feeds a dog for 2 days\n• $10 pays for a puppy's vaccine\n• $15 feeds a dog for a week\n• $25 covers basic veterinary care\n• $50 pays for a complete spay/neuter kit\n• $100 enables an emergency rescue\n\nWhich amount touched your heart?",
    custom_amount: "💝 Amount that touches my heart",
    ask_custom_amount: "Enter the amount you'd like to donate (numbers only):",
    invalid_amount: "Please enter a valid amount (minimum $1)",
    payment_method:
      "You chose to donate $${amount}! 🙏\n\nChoose how you prefer to donate:",
    pix_payment: "💳 PIX (instant)",
    other_payment: "🏦 Other methods",
    pix_generated:
      "Your PIX has been generated! 🎉\n\nTo donate $${amount}, use the code below:",
    pix_instructions:
      "1. Copy the PIX code\n2. Open your bank or payment app\n3. Paste the code and confirm\n4. Your donation will help immediately! 🐾",
    copy_pix: "📋 Copy PIX code",
    pix_copied: "Code copied! ✅",
    donation_confirmed:
      "Donation confirmed! 🎉\n\nThank you, {name}! Your generosity of $${amount} is already making a difference!\n\nLet me show you some of our rescues that were possible thanks to people like you! 📸",
    success_story_1:
      "This is Luna! 🐕\nShe arrived malnourished and scared 3 months ago. Today she plays happily with her new family! Your donation helps stories like this happen. ❤️",
    success_story_2:
      "Meet Max! 🦮\nHe was injured on the streets 6 months ago. Now he's the king of his new home! Every donation enables this kind of transformation.",
    success_story_3:
      "This is our Mel! 🐕‍🦺\nShe was very shy and suspicious a year ago. Today she's the most affectionate in her new home! Together, we save lives!",
    final_thanks:
      "Thank you so much for being part of our donor family! 💝\n\nYou'll receive updates on how your donation is helping our furry friends.\n\nTogether, we save lives! 🐾✨\n\nWould you like to learn more about our work or make another donation?",
    more_info: "📚 I want to know more",
    donate_again: "💖 Donate again",
    type_message: "Type your message...",
    send: "Send",
  },
};

// DOM elements
const startChatBtn = document.getElementById("startChatBtn");
const learnMoreBtn = document.getElementById("learnMoreBtn");
const dashboardBtn = document.getElementById("dashboardBtn");
const accessibilityBtn = document.getElementById("accessibilityBtn");
const closeChatBtn = document.getElementById("closeChatBtn");
const closeDashboardBtn = document.getElementById("closeDashboardBtn");
const closeAccessibility = document.getElementById("closeAccessibility");
const sendMessageBtn = document.getElementById("sendMessageBtn");
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");
const heroSection = document.getElementById("heroSection");
const chatSection = document.getElementById("chatSection");
const dashboardSection = document.getElementById("dashboardSection");
const missionSection = document.getElementById("missionSection");
const accessibilityMenu = document.getElementById("accessibilityMenu");
const loadingOverlay = document.getElementById("loadingOverlay");

// Language and theme controls
const languageSelect = document.getElementById("languageSelect");
const lightTheme = document.getElementById("lightTheme");
const darkTheme = document.getElementById("darkTheme");
const decreaseFont = document.getElementById("decreaseFont");
const increaseFont = document.getElementById("increaseFont");
const currentFontSizeSpan = document.getElementById("currentFontSize");

// Initialize app
document.addEventListener("DOMContentLoaded", function () {
  updateLanguage();
  initializeEventListeners();
  loadUserPreferences();
});
