export interface ORIGINAL {
  DATA_VISUAL_TIMETABLING: DATAVISUALTIMETABLING;
}
export interface DATAVISUALTIMETABLING {
  SAUVEGARDE: SAUVEGARDE;
  LES_PARAMETRES_GENERAUX: LESPARAMETRESGENERAUX;
  LES_PERIODES_NOMMEES: LESPERIODESNOMMEES;
  LES_COMPOSANTES: LESCOMPOSANTES;
  LES_NIVEAUX: LESNIVEAUX;
  LES_PROFESSEURS: LESPROFESSEURS;
  LES_ETUDIANTS: LESETUDIANTS;
  LES_GROUPES: LESGROUPES;
  LES_SALLES: LESSALLES;
  LES_MATIERES: LESMATIERES;
  LES_ENSEIGNEMENTS: LESENSEIGNEMENTS;
  LES_SEANCES: LESSEANCES;
  LES_RESERVATIONS: LESRESERVATIONS;
  LES_GRADES: LESGRADES;
  LES_TYPES_ACTIVITES: LESTYPESACTIVITES;
  LES_CODES_CNU: LESCODESCNU;
  LES_ZONES_DE_SALLES: LESZONESDESALLES;
}
export interface SAUVEGARDE {
  DATE: string;
  VERSION: string;
  UTILISATEUR: string;
}
export interface LESPARAMETRESGENERAUX {
  NOM: string;
  HEURE_DEBUT: string;
  HEURE_FIN: string;
  GRAIN_TEMPOREL: string;
  DATE_DEBUT: string;
  DATE_FIN: string;
  MATIERES_V2: string;
  CALENDRIER: CALENDRIER;
}
export interface CALENDRIER {
  LES_CONGES: LESCONGES;
}
export interface LESCONGES {
  UNE_JOURNEE?: UNEJOURNEEEntity[] | null;
  UNE_PERIODE?: UNEPERIODEEntityOrUNEPERIODE[] | null;
}
export interface UNEJOURNEEEntity {
  DATE: string;
}
export interface UNEPERIODEEntityOrUNEPERIODE {
  DATE_DEBUT: string;
  DATE_FIN: string;
}
export interface LESPERIODESNOMMEES {
  UNE_PERIODE?: UNEPERIODEEntity[] | null;
}
export interface UNEPERIODEEntity {
  UN_NOM_PERIODE: string;
  DES_DATES_PERIODE: DESDATESPERIODE;
}
export interface DESDATESPERIODE {
  UNE_JOURNEE?: UNEJOURNEEEntity[] | null;
  UNE_PERIODE: UNEPERIODEEntityOrUNEPERIODE;
}
export interface LESCOMPOSANTES {
  UNe_COMPOSANTE: UNeCOMPOSANTE;
}
export interface UNeCOMPOSANTE {
  CODE: string;
  DATE_MODIFICATION: string;
  NOM: string;
  ALIAS: string;
  TYPE_DE_COMPOSANTE: string;
  COULEUR: string;
  COULEUR_POLICE: string;
  CODE_PROPRIETAIRE: string;
}
export interface LESNIVEAUX {
  UN_NIVEAU?: UNNIVEAUEntity[] | null;
}
export interface UNNIVEAUEntity {
  CODE: string;
  DATE_MODIFICATION: string;
  NOM: string;
  ALIAS: string;
  COULEUR: string;
  COULEUR_POLICE: string;
  CODE_PROPRIETAIRE: string;
  TYPE_ELEMENT: string;
  IDENTIFIANT?: string | null;
  COMMENTAIRE?: string | null;
}
export interface LESPROFESSEURS {
  UN_PROFESSEUR?: UNPROFESSEUREntity[] | null;
}
export interface UNPROFESSEUREntity {
  CODE: string;
  DATE_MODIFICATION: string;
  NOM: string;
  PRENOM: string;
  PRENOM2: string;
  IDENTIFIANT?: string | null;
  COMMENTAIRE?: string | null;
  COMPOSANTE: string;
  TITULAIRE: string;
  DATE_DOSSIER: string;
  NAISSANCE: string;
  CNU: string;
  GRADE: string;
  CODE_PROPRIETAIRE: string;
  COULEUR: string;
  COULEUR_POLICE: string;
  VOLUME_STAT_SPECIF: string;
  VOLUME_COMP_SPECIFIQUE: string;
  ADRESSE: ADRESSE;
  ALIAS?: string | null;
  IDENTIFIANT_NATIONAL?: string | null;
}
export interface ADRESSE {
  NUMERO: string;
  RUE: string;
  CODE_POSTAL: string;
  VILLE: string;
  PAYS: string;
  EMAIL?: string | null;
}
export interface LESETUDIANTS {
  UN_ETUDIANT?: UNETUDIANTEntity[] | null;
}
export interface UNETUDIANTEntity {
  CODE: string;
  DATE_MODIFICATION: string;
  NOM: string;
  PRENOM: string;
  PRENOM2?: string | null;
  NAISSANCE: string;
  IDENTIFIANT: string;
  BOURSIER: string;
  COMPOSANTE: string;
  EMAIL?: string | null;
  TYPE_PUBLIC: string;
  CODE_PROPRIETAIRE: string;
}
export interface LESGROUPES {
  UN_GROUPE?: UNGROUPEEntity[] | null;
}
export interface UNGROUPEEntity {
  CODE: string;
  DATE_MODIFICATION: string;
  NOM: string;
  ALIAS: string;
  COMMENTAIRE?: string | null;
  COMPOSANTE: string;
  NIVEAU: string;
  DIPLOME: string;
  TYPE_PUBLIC: string;
  QUANTITE_MAX: string;
  COULEUR: string;
  COULEUR_POLICE: string;
  CODE_PROPRIETAIRE: string;
  LES_ETUDIANTS_DU_GROUPE?: LESETUDIANTSDUGROUPE | null;
  CALENDRIER: CALENDRIER1;
  IDENTIFIANT?: string | null;
  LES_SUPER_GROUPES?: LESSUPERGROUPES | null;
}
export interface LESETUDIANTSDUGROUPE {
  UN_CODE_ETUDIANT?: string[] | null | string;
}
export interface CALENDRIER1 {
  LES_CONGES: LESCONGES;
  LES_EXAMENS?: DESDATESPERIODEOrLESEXAMENS | null;
}
export interface DESDATESPERIODEOrLESEXAMENS {
  UNE_PERIODE: UNEPERIODEEntityOrUNEPERIODE;
}
export interface LESSUPERGROUPES {
  UN_CODE_SUPER_GROUPE?: string | string[] | null;
}
export interface LESSALLES {
  UNE_SALLE?: UNESALLEEntity[] | null;
}
export interface UNESALLEEntity {
  CODE: string;
  DATE_MODIFICATION: string;
  NOM: string;
  ALIAS: string;
  COMMENTAIRE?: string | null;
  COMPOSANTE: string;
  CAPACITE: string;
  SURFACE: string;
  COULEUR: string;
  COULEUR_POLICE: string;
  CODE_PROPRIETAIRE: string;
  CODE_ZONE: string;
}
export interface LESMATIERES {
  UNE_MATIERE?: UNEMATIEREEntity[] | null;
}
export interface UNEMATIEREEntity {
  CODE: string;
  DATE_MODIFICATION: string;
  NOM: string;
  COULEUR: string;
  COULEUR_POLICE: string;
  CODE_PROPRIETAIRE: string;
  CODE_CNU: string;
  ALIAS?: string | null;
}
export interface LESENSEIGNEMENTS {
  UN_ENSEIGNEMENT?: UNENSEIGNEMENTEntity[] | null;
}
export interface UNENSEIGNEMENTEntity {
  CODE: string;
  DATE_MODIFICATION: string;
  NOM: string;
  ALIAS: string;
  TYPE_ACTIVITE: string;
  COMPOSANTE: string;
  NIVEAU: string;
  CODE_PROPRIETAIRE: string;
  COULEUR: string;
  COULEUR_POLICE: string;
  CODE_MATIERE: string;
  DUREE_TOTALE: string;
  DUREE_CHAQUE_SEANCE: string;
  VOLUME_REPARTI: string;
  FORFAITAIRE: string;
  ARTICLE6: string;
  VOLUME_FORFAITAIRE: string;
  DATE_DEBUT: string;
  DATE_FIN: string;
  TYPE_PUBLIC: string;
  NB_SEANCES_HEBDO: string;
  CODE_TYPE_SALLE: string;
  CODE_ZONE_SALLE: string;
  LES_RESSOURCES?: LESRESSOURCES | null;
  IDENTIFIANT?: string | null;
}
export interface LESRESSOURCES {
  UNE_RESSOURCE?:
    | UNERESSOURCEOrUNERESSOURCEEntity
    | UNERESSOURCEOrUNERESSOURCEEntity[];
}
export interface UNERESSOURCEOrUNERESSOURCEEntity {
  TYPE: string;
  CODE_RESSOURCE: string;
}
export interface LESSEANCES {
  UNE_SEANCE: UNESEANCEEntity[];
}
export interface UNESEANCEEntity {
  CODE: string;
  DATE_MODIFICATION: string;
  ENSEIGNEMENT: string;
  DATE: string;
  HEURE: string;
  DUREE: string;
  CODE_PROPRIETAIRE: string;
  LES_RESSOURCES: LESRESSOURCES1;
  COMMENTAIRE?: string | null;
  BLOCAGE?: string | null;
}
export interface LESRESSOURCES1 {
  UNE_RESSOURCE?:
    | UNERESSOURCEEntityOrEntity[]
    | null
    | UNERESSOURCEOrUNERESSOURCEEntity;
}
export interface UNERESSOURCEEntityOrEntity {
  CODE_RESSOURCE: string;
  TYPE?: string | null;
}
export interface LESRESERVATIONS {
  UNE_RESERVATION?: UNERESERVATIONEntity[] | null;
}
export interface UNERESERVATIONEntity {
  CODE: string;
  DATE_MODIFICATION: string;
  DATE: string;
  HEURE: string;
  DUREE: string;
  COMMENTAIRE?: string | null;
  CODE_PROPRIETAIRE: string;
  RESSOURCES_OU_ENSEIGNEMENTS_CONCERNES: RESSOURCESOUENSEIGNEMENTSCONCERNES;
}
export interface RESSOURCESOUENSEIGNEMENTSCONCERNES {
  UNE_RESSOURCE?:
    | UNERESSOURCEOrUNERESSOURCEEntity
    | UNERESSOURCEEntityOrEntity[]
    | null;
}
export interface LESGRADES {
  UN_GRADE?: UNGRADEEntity[] | null;
}
export interface UNGRADEEntity {
  CODE: string;
  DATE_MODIFICATION: string;
  NOM: string;
  HEURES_STATUTAIRES: string;
  HEURES_COMPLEMENTAIRES: string;
  LES_PONDERATIONS: LESPONDERATIONS;
  CODE_PROPRIETAIRE: string;
}
export interface LESPONDERATIONS {
  UNE_PONDERATION?: UNEPONDERATIONEntity[] | null;
}
export interface UNEPONDERATIONEntity {
  PONDERATION_TYPE: string;
  PONDERATION_STATUTAIRE: string;
  PONDERATION_SUPPLEMENTAIRE: string;
}
export interface LESTYPESACTIVITES {
  UN_TYPE_ACTIVITE?: UNTYPEACTIVITEEntity[] | null;
}
export interface UNTYPEACTIVITEEntity {
  CODE: string;
  NOM: string;
  ALIAS: string;
  IDENTIFIANT: string;
  DATE_MODIFICATION: string;
  COULEUR: string;
  COULEUR_POLICE: string;
  CODE_PROPRIETAIRE: string;
}
export interface LESCODESCNU {
  UN_CNU?: UNCNUEntity[] | null;
}
export interface UNCNUEntity {
  CODE: string;
  SECTION: string;
  NOM: string;
  CODE_PROPRIETAIRE: string;
  DATE_MODIFICATION: string;
}
export interface LESZONESDESALLES {
  UNE_ZONE_DE_SALLE?: UNEZONEDESALLEEntity[] | null;
}
export interface UNEZONEDESALLEEntity {
  CODE: string;
  DATE_MODIFICATION: string;
  NOM: string;
  ALIAS: string;
  CODE_PROPRIETAIRE: string;
  COULEUR: string;
  COULEUR_POLICE: string;
}
