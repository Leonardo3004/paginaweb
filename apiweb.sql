PGDMP  '    +            
    {            grass    16.0    16.0 ,    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16571    grass    DATABASE     x   CREATE DATABASE grass WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Spain.1252';
    DROP DATABASE grass;
                postgres    false            �            1259    16589    clientes    TABLE     �   CREATE TABLE public.clientes (
    id integer NOT NULL,
    nombre character varying(255) NOT NULL,
    cedula character varying(255) NOT NULL,
    correo character varying(255),
    telefono character varying(20)
);
    DROP TABLE public.clientes;
       public         heap    postgres    false            �            1259    16588    clientes_id_seq    SEQUENCE     �   CREATE SEQUENCE public.clientes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.clientes_id_seq;
       public          postgres    false    216            �           0    0    clientes_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.clientes_id_seq OWNED BY public.clientes.id;
          public          postgres    false    215            �            1259    24953    facturaventa    TABLE     �   CREATE TABLE public.facturaventa (
    id integer NOT NULL,
    fecha character varying(20) NOT NULL,
    entregado character varying(20) NOT NULL,
    clienteid integer NOT NULL,
    total integer,
    ventaoingreso character varying(20)
);
     DROP TABLE public.facturaventa;
       public         heap    postgres    false            �            1259    24952    facturaventa_id_seq    SEQUENCE     �   CREATE SEQUENCE public.facturaventa_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.facturaventa_id_seq;
       public          postgres    false    220            �           0    0    facturaventa_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.facturaventa_id_seq OWNED BY public.facturaventa.id;
          public          postgres    false    219            �            1259    25028    ingreso    TABLE     �   CREATE TABLE public.ingreso (
    id integer NOT NULL,
    codigolaboratorio character varying(20) NOT NULL,
    identificaciondecampo character varying(20) NOT NULL,
    analisisrequerido character varying(20) NOT NULL,
    factura integer
);
    DROP TABLE public.ingreso;
       public         heap    postgres    false            �            1259    25027    ingreso_id_seq    SEQUENCE     �   CREATE SEQUENCE public.ingreso_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.ingreso_id_seq;
       public          postgres    false    224            �           0    0    ingreso_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.ingreso_id_seq OWNED BY public.ingreso.id;
          public          postgres    false    223            �            1259    16608    usuarios    TABLE     �   CREATE TABLE public.usuarios (
    id integer NOT NULL,
    email character varying(255) NOT NULL,
    "contraseña" character varying(255) NOT NULL,
    cedula character varying(20) NOT NULL
);
    DROP TABLE public.usuarios;
       public         heap    postgres    false            �            1259    16607    usuarios_id_seq    SEQUENCE     �   CREATE SEQUENCE public.usuarios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.usuarios_id_seq;
       public          postgres    false    218            �           0    0    usuarios_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.usuarios_id_seq OWNED BY public.usuarios.id;
          public          postgres    false    217            �            1259    24979    ventas    TABLE     �   CREATE TABLE public.ventas (
    id integer NOT NULL,
    tipodemuestra character varying(255) NOT NULL,
    cantidad integer,
    detalle text,
    codigo character varying(20) NOT NULL,
    costo numeric(10,2) NOT NULL,
    factura integer NOT NULL
);
    DROP TABLE public.ventas;
       public         heap    postgres    false            �            1259    24978    ventas_id_seq    SEQUENCE     �   CREATE SEQUENCE public.ventas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.ventas_id_seq;
       public          postgres    false    222            �           0    0    ventas_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.ventas_id_seq OWNED BY public.ventas.id;
          public          postgres    false    221            .           2604    16592    clientes id    DEFAULT     j   ALTER TABLE ONLY public.clientes ALTER COLUMN id SET DEFAULT nextval('public.clientes_id_seq'::regclass);
 :   ALTER TABLE public.clientes ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216            0           2604    24956    facturaventa id    DEFAULT     r   ALTER TABLE ONLY public.facturaventa ALTER COLUMN id SET DEFAULT nextval('public.facturaventa_id_seq'::regclass);
 >   ALTER TABLE public.facturaventa ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    219    220            2           2604    25031 
   ingreso id    DEFAULT     h   ALTER TABLE ONLY public.ingreso ALTER COLUMN id SET DEFAULT nextval('public.ingreso_id_seq'::regclass);
 9   ALTER TABLE public.ingreso ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    223    224    224            /           2604    16611    usuarios id    DEFAULT     j   ALTER TABLE ONLY public.usuarios ALTER COLUMN id SET DEFAULT nextval('public.usuarios_id_seq'::regclass);
 :   ALTER TABLE public.usuarios ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217    218            1           2604    24982 	   ventas id    DEFAULT     f   ALTER TABLE ONLY public.ventas ALTER COLUMN id SET DEFAULT nextval('public.ventas_id_seq'::regclass);
 8   ALTER TABLE public.ventas ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    222    221    222            �          0    16589    clientes 
   TABLE DATA           H   COPY public.clientes (id, nombre, cedula, correo, telefono) FROM stdin;
    public          postgres    false    216   .1       �          0    24953    facturaventa 
   TABLE DATA           ]   COPY public.facturaventa (id, fecha, entregado, clienteid, total, ventaoingreso) FROM stdin;
    public          postgres    false    220   �1       �          0    25028    ingreso 
   TABLE DATA           k   COPY public.ingreso (id, codigolaboratorio, identificaciondecampo, analisisrequerido, factura) FROM stdin;
    public          postgres    false    224   2       �          0    16608    usuarios 
   TABLE DATA           D   COPY public.usuarios (id, email, "contraseña", cedula) FROM stdin;
    public          postgres    false    218   T2       �          0    24979    ventas 
   TABLE DATA           ^   COPY public.ventas (id, tipodemuestra, cantidad, detalle, codigo, costo, factura) FROM stdin;
    public          postgres    false    222   �2       �           0    0    clientes_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.clientes_id_seq', 171, true);
          public          postgres    false    215            �           0    0    facturaventa_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.facturaventa_id_seq', 25, true);
          public          postgres    false    219            �           0    0    ingreso_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.ingreso_id_seq', 6, true);
          public          postgres    false    223            �           0    0    usuarios_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.usuarios_id_seq', 16, true);
          public          postgres    false    217            �           0    0    ventas_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.ventas_id_seq', 15, true);
          public          postgres    false    221            4           2606    16596    clientes clientes_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.clientes
    ADD CONSTRAINT clientes_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.clientes DROP CONSTRAINT clientes_pkey;
       public            postgres    false    216            <           2606    24958    facturaventa facturaventa_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.facturaventa
    ADD CONSTRAINT facturaventa_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.facturaventa DROP CONSTRAINT facturaventa_pkey;
       public            postgres    false    220            @           2606    25033    ingreso ingreso_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.ingreso
    ADD CONSTRAINT ingreso_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.ingreso DROP CONSTRAINT ingreso_pkey;
       public            postgres    false    224            6           2606    16619    usuarios usuarios_cedula_key 
   CONSTRAINT     Y   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_cedula_key UNIQUE (cedula);
 F   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_cedula_key;
       public            postgres    false    218            8           2606    16617    usuarios usuarios_email_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_email_key UNIQUE (email);
 E   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_email_key;
       public            postgres    false    218            :           2606    16615    usuarios usuarios_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_pkey;
       public            postgres    false    218            >           2606    24986    ventas ventas_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.ventas
    ADD CONSTRAINT ventas_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.ventas DROP CONSTRAINT ventas_pkey;
       public            postgres    false    222            C           2606    25043    ingreso facturaventa    FK CONSTRAINT     z   ALTER TABLE ONLY public.ingreso
    ADD CONSTRAINT facturaventa FOREIGN KEY (factura) REFERENCES public.facturaventa(id);
 >   ALTER TABLE ONLY public.ingreso DROP CONSTRAINT facturaventa;
       public          postgres    false    4668    224    220            A           2606    24959 (   facturaventa facturaventa_clienteid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.facturaventa
    ADD CONSTRAINT facturaventa_clienteid_fkey FOREIGN KEY (clienteid) REFERENCES public.clientes(id);
 R   ALTER TABLE ONLY public.facturaventa DROP CONSTRAINT facturaventa_clienteid_fkey;
       public          postgres    false    220    4660    216            B           2606    24987    ventas ventas_factura_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.ventas
    ADD CONSTRAINT ventas_factura_fkey FOREIGN KEY (factura) REFERENCES public.facturaventa(id);
 D   ALTER TABLE ONLY public.ventas DROP CONSTRAINT ventas_factura_fkey;
       public          postgres    false    4668    222    220            �   g   x�3��*M�S8��(����������3(�Z��[�������ijj����s�r����%��sX�5���s3s��̌LL-,M�b����  ��      �   f   x�32���/S02 "#cN���T��Ԣ�ļ|NCsCNK3ΰԼ�D.#t���
�E�U�@�p��(
}R���R�rpz���s��qqq bh �      �   )   x�3�t�5424��L*��M,���O�L�/�42����� ���      �   �   x�uϻ�0����a�.�%����T�Hy|�JHY����rg<�1�܅����~_����p1l����VuӖ$��-(ۦ��Qa�[�V0��c-�nr�����;bA�	�X1f)"�,yxb��6b"����}���WAD+�N�      �   C   x�34��/JO��LN�4��t�542�44 =N#c.C��s$yS�NSN a4����� �v�     