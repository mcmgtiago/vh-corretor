# Etapa 1 — Estrutura (Sitemap)

**Projeto:** VH Corretor — Landing Page de Captação
**Região:** Recife/PE (foco em Médio & Alto Padrão)
**CRECI:** 22316 F
**Instagram:** @_vh.corretor
**Stack:** Next.js 16 + Tailwind CSS

---

## Visão Geral da Página

A página é **long-form, single-page**, organizada em blocos verticais que conduzem o visitante por uma jornada: **descoberta → prova → confiança → conversão**.

Cada bloco tem um objetivo claro. O WhatsApp flutuante garante conversão em qualquer ponto da página.

---

## Ordem das Seções (Top → Bottom)

```
┌─────────────────────────────────────────────┐
│  01. NAV (sticky)                            │  Sempre visível
├─────────────────────────────────────────────┤
│  02. HERO                                    │  Ganho de atenção + busca
├─────────────────────────────────────────────┤
│  03. BARRA DE CONFIANÇA (números)            │  Prova social rápida
├─────────────────────────────────────────────┤
│  04. IMÓVEIS EM DESTAQUE                     │  Vitrine de produtos
├─────────────────────────────────────────────┤
│  05. ETAPAS / COMO FUNCIONA                  │  Clareza do processo
├─────────────────────────────────────────────┤
│  06. SOBRE O CORRETOR                        │  Construção de confiança
├─────────────────────────────────────────────┤
│  07. DEPOIMENTOS                             │  Prova social qualitativa
├─────────────────────────────────────────────┤
│  08. FORMULÁRIO DE CONTATO                   │  Captura direta
├─────────────────────────────────────────────┤
│  09. CTA FINAL (WhatsApp)                    │  Última conversão
├─────────────────────────────────────────────┤
│  10. RODAPÉ                                  │  Encerramento institucional
└─────────────────────────────────────────────┘

   [BOTÃO WHATSAPP FLUTUANTE]  ←  fixo em toda a página
```

---

## Detalhamento de Cada Bloco

### 01. NAV (Sticky)
**Objetivo:** Orientar e permitir conversão rápida a qualquer momento.
- Logo (esquerda)
- Links âncora para seções internas (central): Imóveis · Sobre · Depoimentos · Contato
- Botão WhatsApp (direita, verde, sempre visível)

### 02. HERO
**Objetivo:** Comunicar posicionamento + oferecer busca rápida.
- Headline principal (proposta de valor forte)
- Subheadline (região + tipo de imóvel)
- Card de busca com toggle **Comprar / Alugar** + selects de **Bairro** + **Tipo de Imóvel** + botão **Buscar**
- Background visual de alto padrão (foto de imóvel sofisticado)
- CTA secundário: "Falar no WhatsApp"

### 03. BARRA DE CONFIANÇA
**Objetivo:** Provar autoridade em segundos.
- 3–4 métricas em linha: Imóveis disponíveis · Bairros atendidos · Anos de experiência · Clientes atendidos
- Visual limpo, números grandes em destaque

### 04. IMÓVEIS EM DESTAQUE
**Objetivo:** Mostrar o produto.
- Título + subtítulo
- Toggle **Comprar / Alugar** (sincronizado com o do HERO)
- Grid de cards (3 colunas desktop, 2 tablet, 1 mobile)
- Cada card: foto · badges (Venda/Aluguel + tipo) · título · bairro · preço · amenidades (quartos, banheiros, vagas, m²)
- CTA no final: **Ver todos os imóveis** → leva a busca filtrada ou WhatsApp

### 05. ETAPAS / COMO FUNCIONA
**Objetivo:** Eliminar dúvida sobre o processo.
- Título: "Como funciona"
- Linha do tempo horizontal (desktop) / vertical (mobile) com **4–5 etapas**:
  1. Você me conta o que procura
  2. Eu seleciono os melhores imóveis
  3. Agendamos as visitas
  4. Acompanho a negociação
  5. Você fecha o negócio (entrega das chaves)
- Cada etapa: ícone + título + descrição curta
- CTA no fim: "Começar agora no WhatsApp"

### 06. SOBRE O CORRETOR
**Objetivo:** Humanizar e gerar confiança pessoal.
- Layout 50/50: foto profissional (esquerda) + texto (direita)
- Nome, CRECI, tempo de mercado
- Breve biografia em 2–3 parágrafos (tom humano, não corporativo)
- Especialidades (Médio & Alto Padrão)
- Link Instagram + Botão WhatsApp

### 07. DEPOIMENTOS
**Objetivo:** Prova social de clientes reais.
- Título: "O que dizem meus clientes"
- Carrossel ou grid de 3–6 depoimentos
- Cada card: foto do cliente (opcional) + nome + bairro onde comprou/alugou + texto do depoimento + estrelas
- CTA final: "Quero essa experiência"

### 08. FORMULÁRIO DE CONTATO
**Objetivo:** Captura direta de lead (alternativa ao WhatsApp).
- Título: "Vamos conversar?"
- Campos: Nome · WhatsApp · E-mail · Tipo (Comprar/Alugar) · Bairro de interesse · Mensagem
- Botão: **Enviar mensagem**
- Lado do formulário: texto reforçando resposta rápida + foto do corretor em miniatura
- Observação: este formulário pode ser substituído/enviar para WhatsApp direto via `wa.me` link

### 09. CTA FINAL (WhatsApp)
**Objetivo:** Última oportunidade de conversão.
- Fundo azul sólido (mesmo tom do HERO para criar simetria)
- Headline forte: "Pronto para encontrar seu imóvel ideal?"
- Botão grande verde WhatsApp
- Subtítulo: "Resposta em até 10 minutos"

### 10. RODAPÉ
**Objetivo:** Encerramento institucional.
- Logo + nome do corretor
- CRECI-PE 22316 F
- Links âncora rápidos
- Instagram @_vh.corretor
- Copyright + cidade/ano
- (Opcional) Selo CRECI

---

## Elementos Fixos / Persistentes

| Elemento | Comportamento |
|---|---|
| **Botão WhatsApp flutuante** | Fixo no canto inferior direito, visível em toda a página, com pulse/animação discreta |
| **NAV sticky** | Topo, com sombra leve ao rolar |
| **Anchor scroll suave** | Todos os links da NAV pulam para as seções correspondentes |

---

## Estrutura de Arquivos (Next.js 16)

```
vh-corretor/
├── app/
│   ├── layout.tsx          # Layout raiz (fonts, metadata, WhatsApp flutuante)
│   ├── page.tsx            # Página única, monta todas as seções em ordem
│   └── globals.css         # Tailwind + estilos globais
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── TrustBar.tsx
│   ├── PropertiesGrid.tsx
│   ├── PropertyCard.tsx
│   ├── HowItWorks.tsx
│   ├── AboutBroker.tsx
│   ├── Testimonials.tsx
│   ├── ContactForm.tsx
│   ├── FinalCTA.tsx
│   ├── Footer.tsx
│   └── FloatingWhatsApp.tsx
├── lib/
│   └── properties.ts       # Mock dos imóveis (data estática para o wireframe)
├── public/
│   ├── images/             # Fotos de imóveis (placeholders)
│   └── logo/
├── docs/
│   ├── 01-estrutura.md     # ← VOCÊ ESTÁ AQUI
│   ├── 02-copy.md          # Próximo
│   ├── 03-wireframe.md
│   └── 04-refinamentos.md
└── package.json
```

---

## Próxima Etapa

Aprovar esta estrutura e seguir para **Etapa 2 — Copywriting**, onde vamos escrever todos os textos (headlines, descrições, CTAs, depoimentos) seção por seção.