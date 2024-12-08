-- oneclickwork Database Code
-- Préciser dans le rapport les étapes pour le reproduire.
BEGIN;

-- Type: PlanTarifaire

-- DROP TYPE plan_tarifaire;

CREATE TYPE public.plan_tarifaire AS
(
	intitule character varying(25),
	description character varying(1024),
	duree integer,
	prix integer
);

ALTER TYPE public.plan_tarifaire
    OWNER TO pg_read_all_data;

COMMENT ON TYPE public.plan_tarifaire
    IS 'plan taifaire d''un artisan qui regis la qualite de service.
en fonction du prix et du temps.';

-- --- -- --- -- --- -- --- -- ---

-- Type: coordonnees

-- DROP TYPE coordonnees;

CREATE TYPE public.coordonnees AS
(
	type character varying(3),
	coord1 character varying(25),
	coord2 character varying(25)
);

ALTER TYPE public.coordonnees
    OWNER TO pg_read_all_data;

COMMENT ON TYPE public.coordonnees
    IS 'selon le format de donnees ce type stocke les coordonnees
format:
DD: degres decimaux ex:41.20338,2.17403
DMS: degres minute et seconde ex:41°24''12.2"N 2°10''26.5"E
DMM: degres minutes et decimaux  ex:41 24.2028, 2 10.4418';

GRANT USAGE ON TYPE public.coordonnees TO PUBLIC;

GRANT USAGE ON TYPE public.coordonnees TO pg_read_all_data;

-- --- -- --- -- --- -- --- -- ---


CREATE TABLE adresse
(
    id bigserial NOT NULL,
    "Pays" character varying(50),
    "Ville" character varying(60),
    adresse character varying(120),
    PRIMARY KEY (id)
);

CREATE TABLE client
(
    id bigserial NOT NULL,
    nom character varying(256),
    prenom character varying(256),
    mail character varying(400),
    telephone1 character varying(15),
    telephone2 character varying(15),
    photo_profil character varying(4096),
    motdepasse character varying(4096),
    activated boolean,
    code character varying(4096),
    date_amission date,
    ref_adresse bigint,
    PRIMARY KEY (id)
);
ALTER TABLE client ADD UNIQUE (mail);

CREATE TABLE artisan
(
	idArt bigserial NOT NULL,
    lien_portfolio character varying(4096),
    description character varying(1024),
    localisation coordonnees,
    realisations character varying(4096)[],
    niveau_scolaire character varying(1024),
    diplomes character varying(4096)[],
    plans plan_tarifaire[]
)INHERITS (client);

CREATE TABLE metier
(
    id bigserial NOT NULL,
    nom character varying(512),
    questions character varying(2048)[],
    PRIMARY KEY (id)
);

CREATE TABLE projet
(
    id bigserial NOT NULL,
    ref_client bigint,
    titre character varying,
    description character varying(2048),
    int_salaire_sup bigint,
    int_salaire_sub bigint,
    nb_personnes_requis integer,
    localisation coordonnees,
    ref_adresse bigint,
    PRIMARY KEY (id)
);

CREATE TABLE contrat
(
    id bigserial NOT NULL,
    montant bigint,
    date_debut date,
    date_fin date,
    ref_offre bigint,
    note_client integer,
    note_artisan integer,
    PRIMARY KEY (id)
);

CREATE TABLE paiement
(
    id bigserial NOT NULL,
    ref_contrat bigint,
    date date,
    montant bigint,
    PRIMARY KEY (id)
);

CREATE TABLE produit
(
    id bigserial NOT NULL,
    libelle character varying(256),
    prix bigint,
    description character varying(2048),
    ref_vendeur bigint,
    dispo boolean,
    PRIMARY KEY (id)
);

CREATE TABLE jaime
(
    id bigserial NOT NULL,
    ref_aimeur bigint,
    ref_aime bigint,
    PRIMARY KEY (id)
);

CREATE TABLE commentaire
(
    id bigserial NOT NULL,
    ref_commentateur bigint,
    ref_commente bigint,
    text character varying(1024),
    PRIMARY KEY (id)
);

CREATE TABLE exerce
(
    id bigserial NOT NULL,
    "ref_Artisan" bigint,
    ref_metier bigint,
    PRIMARY KEY (id)
);

CREATE TABLE concerne
(
    id bigserial,
    ref_projet bigint,
    ref_metier bigint
);

COMMENT ON TABLE concerne
    IS 'un projet peut concerner plusieurs metiers';

CREATE TABLE postule
(
    id bigserial,
    ref_projet bigint,
    ref_artisan bigint
);

ALTER TABLE client
    ADD FOREIGN KEY (ref_adresse)
    REFERENCES public.adresse (id) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE CASCADE;


ALTER TABLE projet
    ADD FOREIGN KEY (ref_client)
    REFERENCES public.client (id) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE CASCADE;


ALTER TABLE projet
    ADD FOREIGN KEY (ref_adresse)
    REFERENCES public.adresse (id) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE CASCADE;


ALTER TABLE contrat
    ADD FOREIGN KEY (ref_offre)
    REFERENCES public.projet (id) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE CASCADE;


ALTER TABLE paiement
    ADD FOREIGN KEY (ref_contrat)
    REFERENCES public.contrat (id) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE CASCADE;


ALTER TABLE produit
    ADD FOREIGN KEY (ref_vendeur)
    REFERENCES public.client (id) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE CASCADE;


ALTER TABLE jaime
    ADD FOREIGN KEY (ref_aimeur)
    REFERENCES public.client (id) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE CASCADE;


ALTER TABLE jaime
    ADD FOREIGN KEY (ref_aime)
    REFERENCES public.client (id) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE CASCADE;


ALTER TABLE commentaire
    ADD FOREIGN KEY (ref_commentateur)
    REFERENCES public.client (id) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE CASCADE;


ALTER TABLE commentaire
    ADD FOREIGN KEY (ref_commente)
    REFERENCES public.client (id) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE CASCADE;


ALTER TABLE artisan
    ADD PRIMARY KEY ("idart");

ALTER TABLE exerce
    ADD FOREIGN KEY ("ref_Artisan")
    REFERENCES public.client (id) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE CASCADE;


ALTER TABLE exerce
    ADD FOREIGN KEY (ref_metier)
    REFERENCES public.metier (id) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE CASCADE;
    
ALTER TABLE IF EXISTS public.postule
    ADD FOREIGN KEY (ref_projet)
    REFERENCES public.projet (id) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE CASCADE;


ALTER TABLE IF EXISTS public.postule
    ADD FOREIGN KEY (ref_artisan)
    REFERENCES public.artisan (idArt) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE CASCADE;
    
ALTER TABLE IF EXISTS public.concerne
    ADD FOREIGN KEY (ref_projet)
    REFERENCES public.projet (id) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE CASCADE;


ALTER TABLE IF EXISTS public.concerne
    ADD FOREIGN KEY (ref_metier)
    REFERENCES public.metier (id) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE CASCADE;

END;
