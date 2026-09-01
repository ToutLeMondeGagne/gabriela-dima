import {defineField, defineType} from 'sanity'

export const siteContent = defineType({
  name: 'siteContent',
  title: 'Contenu du site',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    // ── HERO ──────────────────────────────────────────────────────────────────
    defineField({
      name: 'hero',
      title: 'Section Hero',
      type: 'object',
      fields: [
        {name: 'sloganLine1', title: 'Slogan — Ligne 1', type: 'string'},
        {name: 'sloganLine2', title: 'Slogan — Ligne 2 (italique doré)', type: 'string'},
        {name: 'sloganLine3', title: 'Slogan — Ligne 3', type: 'string'},
        {name: 'description', title: 'Description', type: 'text', rows: 4},
        {name: 'ctaButton', title: 'Bouton principal', type: 'string'},
        {name: 'ctaSecondary', title: 'Bouton secondaire', type: 'string'},
        {name: 'yearsLabel', title: 'Label années d\'expérience', type: 'string'},
        {name: 'yearsValue', title: 'Valeur années d\'expérience', type: 'string'},
      ],
    }),

    // ── ABOUT ─────────────────────────────────────────────────────────────────
    defineField({
      name: 'about',
      title: 'Section À propos',
      type: 'object',
      fields: [
        {name: 'title', title: 'Titre', type: 'string'},
        {name: 'mainText', title: 'Paragraphe principal', type: 'text', rows: 6},
        {name: 'approachText', title: 'Paragraphe Mon approche', type: 'text', rows: 3},
        {
          name: 'credentialsList',
          title: 'Liste de certifications/infos',
          type: 'array',
          of: [{type: 'string'}],
        },
        {name: 'ctaText', title: 'Texte du lien CTA', type: 'string'},
      ],
    }),

    // ── POURQUOI GABRIELA ─────────────────────────────────────────────────────
    defineField({
      name: 'whyGabriela',
      title: 'Section Pourquoi Gabriela',
      type: 'object',
      fields: [
        {name: 'title', title: 'Titre', type: 'string'},
        {name: 'intro', title: 'Phrase d\'intro', type: 'text', rows: 3},
        {
          name: 'features',
          title: 'Cartes de valeurs',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {name: 'title', title: 'Titre', type: 'string'},
              {name: 'description', title: 'Description', type: 'text', rows: 2},
            ],
            preview: {select: {title: 'title'}},
          }],
        },
      ],
    }),

    // ── RÉSULTATS / KPIs ──────────────────────────────────────────────────────
    defineField({
      name: 'kpis',
      title: 'Section Résultats (KPIs)',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'value', title: 'Valeur (ex: +35%)', type: 'string'},
          {name: 'label', title: 'Label', type: 'string'},
          {name: 'description', title: 'Description', type: 'text', rows: 2},
        ],
        preview: {select: {title: 'value', subtitle: 'label'}},
      }],
    }),

    // ── CTA ───────────────────────────────────────────────────────────────────
    defineField({
      name: 'cta',
      title: 'Section CTA (bas de page)',
      type: 'object',
      fields: [
        {name: 'title', title: 'Titre', type: 'string'},
        {name: 'subtitle', title: 'Sous-titre', type: 'string'},
        {name: 'buttonText', title: 'Texte du bouton', type: 'string'},
      ],
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Contenu du site'}
    },
  },
})
