export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  bigint: { input: any; output: any; }
  jsonb: { input: any; output: any; }
  numeric: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** 批次媒体文件表 */
export type Batch_Media_Files = {
  __typename?: 'batch_media_files';
  /** An object relationship */
  batch: Batches;
  batch_batches: Scalars['bigint']['output'];
  created_at: Scalars['timestamptz']['output'];
  /** 文件类型：image/video */
  file_type: Scalars['String']['output'];
  file_url: Scalars['String']['output'];
  id: Scalars['bigint']['output'];
  /** 媒体分类：picking/packing/loading/departure（采摘/打包/装车/发车） */
  media_category: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "batch_media_files" */
export type Batch_Media_Files_Aggregate = {
  __typename?: 'batch_media_files_aggregate';
  aggregate?: Maybe<Batch_Media_Files_Aggregate_Fields>;
  nodes: Array<Batch_Media_Files>;
};

export type Batch_Media_Files_Aggregate_Bool_Exp = {
  count?: InputMaybe<Batch_Media_Files_Aggregate_Bool_Exp_Count>;
};

export type Batch_Media_Files_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Batch_Media_Files_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Batch_Media_Files_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "batch_media_files" */
export type Batch_Media_Files_Aggregate_Fields = {
  __typename?: 'batch_media_files_aggregate_fields';
  avg?: Maybe<Batch_Media_Files_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Batch_Media_Files_Max_Fields>;
  min?: Maybe<Batch_Media_Files_Min_Fields>;
  stddev?: Maybe<Batch_Media_Files_Stddev_Fields>;
  stddev_pop?: Maybe<Batch_Media_Files_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Batch_Media_Files_Stddev_Samp_Fields>;
  sum?: Maybe<Batch_Media_Files_Sum_Fields>;
  var_pop?: Maybe<Batch_Media_Files_Var_Pop_Fields>;
  var_samp?: Maybe<Batch_Media_Files_Var_Samp_Fields>;
  variance?: Maybe<Batch_Media_Files_Variance_Fields>;
};


/** aggregate fields of "batch_media_files" */
export type Batch_Media_Files_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Batch_Media_Files_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "batch_media_files" */
export type Batch_Media_Files_Aggregate_Order_By = {
  avg?: InputMaybe<Batch_Media_Files_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Batch_Media_Files_Max_Order_By>;
  min?: InputMaybe<Batch_Media_Files_Min_Order_By>;
  stddev?: InputMaybe<Batch_Media_Files_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Batch_Media_Files_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Batch_Media_Files_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Batch_Media_Files_Sum_Order_By>;
  var_pop?: InputMaybe<Batch_Media_Files_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Batch_Media_Files_Var_Samp_Order_By>;
  variance?: InputMaybe<Batch_Media_Files_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "batch_media_files" */
export type Batch_Media_Files_Arr_Rel_Insert_Input = {
  data: Array<Batch_Media_Files_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Batch_Media_Files_On_Conflict>;
};

/** aggregate avg on columns */
export type Batch_Media_Files_Avg_Fields = {
  __typename?: 'batch_media_files_avg_fields';
  batch_batches?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "batch_media_files" */
export type Batch_Media_Files_Avg_Order_By = {
  batch_batches?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "batch_media_files". All fields are combined with a logical 'AND'. */
export type Batch_Media_Files_Bool_Exp = {
  _and?: InputMaybe<Array<Batch_Media_Files_Bool_Exp>>;
  _not?: InputMaybe<Batch_Media_Files_Bool_Exp>;
  _or?: InputMaybe<Array<Batch_Media_Files_Bool_Exp>>;
  batch?: InputMaybe<Batches_Bool_Exp>;
  batch_batches?: InputMaybe<Bigint_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  file_type?: InputMaybe<String_Comparison_Exp>;
  file_url?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  media_category?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "batch_media_files" */
export enum Batch_Media_Files_Constraint {
  /** unique or primary key constraint on columns "id" */
  BatchMediaFilesPkey = 'batch_media_files_pkey'
}

/** input type for incrementing numeric columns in table "batch_media_files" */
export type Batch_Media_Files_Inc_Input = {
  batch_batches?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "batch_media_files" */
export type Batch_Media_Files_Insert_Input = {
  batch?: InputMaybe<Batches_Obj_Rel_Insert_Input>;
  batch_batches?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 文件类型：image/video */
  file_type?: InputMaybe<Scalars['String']['input']>;
  file_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 媒体分类：picking/packing/loading/departure（采摘/打包/装车/发车） */
  media_category?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Batch_Media_Files_Max_Fields = {
  __typename?: 'batch_media_files_max_fields';
  batch_batches?: Maybe<Scalars['bigint']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 文件类型：image/video */
  file_type?: Maybe<Scalars['String']['output']>;
  file_url?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 媒体分类：picking/packing/loading/departure（采摘/打包/装车/发车） */
  media_category?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "batch_media_files" */
export type Batch_Media_Files_Max_Order_By = {
  batch_batches?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  /** 文件类型：image/video */
  file_type?: InputMaybe<Order_By>;
  file_url?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 媒体分类：picking/packing/loading/departure（采摘/打包/装车/发车） */
  media_category?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Batch_Media_Files_Min_Fields = {
  __typename?: 'batch_media_files_min_fields';
  batch_batches?: Maybe<Scalars['bigint']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 文件类型：image/video */
  file_type?: Maybe<Scalars['String']['output']>;
  file_url?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 媒体分类：picking/packing/loading/departure（采摘/打包/装车/发车） */
  media_category?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "batch_media_files" */
export type Batch_Media_Files_Min_Order_By = {
  batch_batches?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  /** 文件类型：image/video */
  file_type?: InputMaybe<Order_By>;
  file_url?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 媒体分类：picking/packing/loading/departure（采摘/打包/装车/发车） */
  media_category?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "batch_media_files" */
export type Batch_Media_Files_Mutation_Response = {
  __typename?: 'batch_media_files_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Batch_Media_Files>;
};

/** on_conflict condition type for table "batch_media_files" */
export type Batch_Media_Files_On_Conflict = {
  constraint: Batch_Media_Files_Constraint;
  update_columns?: Array<Batch_Media_Files_Update_Column>;
  where?: InputMaybe<Batch_Media_Files_Bool_Exp>;
};

/** Ordering options when selecting data from "batch_media_files". */
export type Batch_Media_Files_Order_By = {
  batch?: InputMaybe<Batches_Order_By>;
  batch_batches?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  file_type?: InputMaybe<Order_By>;
  file_url?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  media_category?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: batch_media_files */
export type Batch_Media_Files_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "batch_media_files" */
export enum Batch_Media_Files_Select_Column {
  /** column name */
  BatchBatches = 'batch_batches',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FileType = 'file_type',
  /** column name */
  FileUrl = 'file_url',
  /** column name */
  Id = 'id',
  /** column name */
  MediaCategory = 'media_category',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "batch_media_files" */
export type Batch_Media_Files_Set_Input = {
  batch_batches?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 文件类型：image/video */
  file_type?: InputMaybe<Scalars['String']['input']>;
  file_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 媒体分类：picking/packing/loading/departure（采摘/打包/装车/发车） */
  media_category?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Batch_Media_Files_Stddev_Fields = {
  __typename?: 'batch_media_files_stddev_fields';
  batch_batches?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "batch_media_files" */
export type Batch_Media_Files_Stddev_Order_By = {
  batch_batches?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Batch_Media_Files_Stddev_Pop_Fields = {
  __typename?: 'batch_media_files_stddev_pop_fields';
  batch_batches?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "batch_media_files" */
export type Batch_Media_Files_Stddev_Pop_Order_By = {
  batch_batches?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Batch_Media_Files_Stddev_Samp_Fields = {
  __typename?: 'batch_media_files_stddev_samp_fields';
  batch_batches?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "batch_media_files" */
export type Batch_Media_Files_Stddev_Samp_Order_By = {
  batch_batches?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "batch_media_files" */
export type Batch_Media_Files_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Batch_Media_Files_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Batch_Media_Files_Stream_Cursor_Value_Input = {
  batch_batches?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 文件类型：image/video */
  file_type?: InputMaybe<Scalars['String']['input']>;
  file_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 媒体分类：picking/packing/loading/departure（采摘/打包/装车/发车） */
  media_category?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Batch_Media_Files_Sum_Fields = {
  __typename?: 'batch_media_files_sum_fields';
  batch_batches?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "batch_media_files" */
export type Batch_Media_Files_Sum_Order_By = {
  batch_batches?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "batch_media_files" */
export enum Batch_Media_Files_Update_Column {
  /** column name */
  BatchBatches = 'batch_batches',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FileType = 'file_type',
  /** column name */
  FileUrl = 'file_url',
  /** column name */
  Id = 'id',
  /** column name */
  MediaCategory = 'media_category',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Batch_Media_Files_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Batch_Media_Files_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Batch_Media_Files_Set_Input>;
  /** filter the rows which have to be updated */
  where: Batch_Media_Files_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Batch_Media_Files_Var_Pop_Fields = {
  __typename?: 'batch_media_files_var_pop_fields';
  batch_batches?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "batch_media_files" */
export type Batch_Media_Files_Var_Pop_Order_By = {
  batch_batches?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Batch_Media_Files_Var_Samp_Fields = {
  __typename?: 'batch_media_files_var_samp_fields';
  batch_batches?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "batch_media_files" */
export type Batch_Media_Files_Var_Samp_Order_By = {
  batch_batches?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Batch_Media_Files_Variance_Fields = {
  __typename?: 'batch_media_files_variance_fields';
  batch_batches?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "batch_media_files" */
export type Batch_Media_Files_Variance_Order_By = {
  batch_batches?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** 发车批次 */
export type Batches = {
  __typename?: 'batches';
  /** An array relationship */
  batch_media_files: Array<Batch_Media_Files>;
  /** An aggregate relationship */
  batch_media_files_aggregate: Batch_Media_Files_Aggregate;
  created_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  farmer: Farmers;
  farmer_farmers: Scalars['bigint']['output'];
  id: Scalars['bigint']['output'];
  /** 产品图片地址 */
  image_url?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  product?: Maybe<Products>;
  updated_at: Scalars['timestamptz']['output'];
};


/** 发车批次 */
export type BatchesBatch_Media_FilesArgs = {
  distinct_on?: InputMaybe<Array<Batch_Media_Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Batch_Media_Files_Order_By>>;
  where?: InputMaybe<Batch_Media_Files_Bool_Exp>;
};


/** 发车批次 */
export type BatchesBatch_Media_Files_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Batch_Media_Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Batch_Media_Files_Order_By>>;
  where?: InputMaybe<Batch_Media_Files_Bool_Exp>;
};

/** aggregated selection of "batches" */
export type Batches_Aggregate = {
  __typename?: 'batches_aggregate';
  aggregate?: Maybe<Batches_Aggregate_Fields>;
  nodes: Array<Batches>;
};

export type Batches_Aggregate_Bool_Exp = {
  count?: InputMaybe<Batches_Aggregate_Bool_Exp_Count>;
};

export type Batches_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Batches_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Batches_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "batches" */
export type Batches_Aggregate_Fields = {
  __typename?: 'batches_aggregate_fields';
  avg?: Maybe<Batches_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Batches_Max_Fields>;
  min?: Maybe<Batches_Min_Fields>;
  stddev?: Maybe<Batches_Stddev_Fields>;
  stddev_pop?: Maybe<Batches_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Batches_Stddev_Samp_Fields>;
  sum?: Maybe<Batches_Sum_Fields>;
  var_pop?: Maybe<Batches_Var_Pop_Fields>;
  var_samp?: Maybe<Batches_Var_Samp_Fields>;
  variance?: Maybe<Batches_Variance_Fields>;
};


/** aggregate fields of "batches" */
export type Batches_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Batches_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "batches" */
export type Batches_Aggregate_Order_By = {
  avg?: InputMaybe<Batches_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Batches_Max_Order_By>;
  min?: InputMaybe<Batches_Min_Order_By>;
  stddev?: InputMaybe<Batches_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Batches_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Batches_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Batches_Sum_Order_By>;
  var_pop?: InputMaybe<Batches_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Batches_Var_Samp_Order_By>;
  variance?: InputMaybe<Batches_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "batches" */
export type Batches_Arr_Rel_Insert_Input = {
  data: Array<Batches_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Batches_On_Conflict>;
};

/** aggregate avg on columns */
export type Batches_Avg_Fields = {
  __typename?: 'batches_avg_fields';
  farmer_farmers?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "batches" */
export type Batches_Avg_Order_By = {
  farmer_farmers?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "batches". All fields are combined with a logical 'AND'. */
export type Batches_Bool_Exp = {
  _and?: InputMaybe<Array<Batches_Bool_Exp>>;
  _not?: InputMaybe<Batches_Bool_Exp>;
  _or?: InputMaybe<Array<Batches_Bool_Exp>>;
  batch_media_files?: InputMaybe<Batch_Media_Files_Bool_Exp>;
  batch_media_files_aggregate?: InputMaybe<Batch_Media_Files_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  farmer?: InputMaybe<Farmers_Bool_Exp>;
  farmer_farmers?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  image_url?: InputMaybe<String_Comparison_Exp>;
  product?: InputMaybe<Products_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "batches" */
export enum Batches_Constraint {
  /** unique or primary key constraint on columns "id" */
  BatchesPkey = 'batches_pkey'
}

/** input type for incrementing numeric columns in table "batches" */
export type Batches_Inc_Input = {
  farmer_farmers?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "batches" */
export type Batches_Insert_Input = {
  batch_media_files?: InputMaybe<Batch_Media_Files_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  farmer?: InputMaybe<Farmers_Obj_Rel_Insert_Input>;
  farmer_farmers?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 产品图片地址 */
  image_url?: InputMaybe<Scalars['String']['input']>;
  product?: InputMaybe<Products_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Batches_Max_Fields = {
  __typename?: 'batches_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  farmer_farmers?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 产品图片地址 */
  image_url?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "batches" */
export type Batches_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  farmer_farmers?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 产品图片地址 */
  image_url?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Batches_Min_Fields = {
  __typename?: 'batches_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  farmer_farmers?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 产品图片地址 */
  image_url?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "batches" */
export type Batches_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  farmer_farmers?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 产品图片地址 */
  image_url?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "batches" */
export type Batches_Mutation_Response = {
  __typename?: 'batches_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Batches>;
};

/** input type for inserting object relation for remote table "batches" */
export type Batches_Obj_Rel_Insert_Input = {
  data: Batches_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Batches_On_Conflict>;
};

/** on_conflict condition type for table "batches" */
export type Batches_On_Conflict = {
  constraint: Batches_Constraint;
  update_columns?: Array<Batches_Update_Column>;
  where?: InputMaybe<Batches_Bool_Exp>;
};

/** Ordering options when selecting data from "batches". */
export type Batches_Order_By = {
  batch_media_files_aggregate?: InputMaybe<Batch_Media_Files_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  farmer?: InputMaybe<Farmers_Order_By>;
  farmer_farmers?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
  product?: InputMaybe<Products_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: batches */
export type Batches_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "batches" */
export enum Batches_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FarmerFarmers = 'farmer_farmers',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "batches" */
export type Batches_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  farmer_farmers?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 产品图片地址 */
  image_url?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Batches_Stddev_Fields = {
  __typename?: 'batches_stddev_fields';
  farmer_farmers?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "batches" */
export type Batches_Stddev_Order_By = {
  farmer_farmers?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Batches_Stddev_Pop_Fields = {
  __typename?: 'batches_stddev_pop_fields';
  farmer_farmers?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "batches" */
export type Batches_Stddev_Pop_Order_By = {
  farmer_farmers?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Batches_Stddev_Samp_Fields = {
  __typename?: 'batches_stddev_samp_fields';
  farmer_farmers?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "batches" */
export type Batches_Stddev_Samp_Order_By = {
  farmer_farmers?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "batches" */
export type Batches_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Batches_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Batches_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  farmer_farmers?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 产品图片地址 */
  image_url?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Batches_Sum_Fields = {
  __typename?: 'batches_sum_fields';
  farmer_farmers?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "batches" */
export type Batches_Sum_Order_By = {
  farmer_farmers?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "batches" */
export enum Batches_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FarmerFarmers = 'farmer_farmers',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Batches_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Batches_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Batches_Set_Input>;
  /** filter the rows which have to be updated */
  where: Batches_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Batches_Var_Pop_Fields = {
  __typename?: 'batches_var_pop_fields';
  farmer_farmers?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "batches" */
export type Batches_Var_Pop_Order_By = {
  farmer_farmers?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Batches_Var_Samp_Fields = {
  __typename?: 'batches_var_samp_fields';
  farmer_farmers?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "batches" */
export type Batches_Var_Samp_Order_By = {
  farmer_farmers?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Batches_Variance_Fields = {
  __typename?: 'batches_variance_fields';
  farmer_farmers?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "batches" */
export type Batches_Variance_Order_By = {
  farmer_farmers?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** 购物车 */
export type Carts = {
  __typename?: 'carts';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['bigint']['output'];
  /** 是否选中 */
  is_selected: Scalars['Boolean']['output'];
  /** An object relationship */
  product: Products;
  product_products: Scalars['bigint']['output'];
  /** 数量 */
  quantity: Scalars['bigint']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  user_users: Scalars['bigint']['output'];
};

/** aggregated selection of "carts" */
export type Carts_Aggregate = {
  __typename?: 'carts_aggregate';
  aggregate?: Maybe<Carts_Aggregate_Fields>;
  nodes: Array<Carts>;
};

export type Carts_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Carts_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Carts_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Carts_Aggregate_Bool_Exp_Count>;
};

export type Carts_Aggregate_Bool_Exp_Bool_And = {
  arguments: Carts_Select_Column_Carts_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Carts_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Carts_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Carts_Select_Column_Carts_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Carts_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Carts_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Carts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Carts_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "carts" */
export type Carts_Aggregate_Fields = {
  __typename?: 'carts_aggregate_fields';
  avg?: Maybe<Carts_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Carts_Max_Fields>;
  min?: Maybe<Carts_Min_Fields>;
  stddev?: Maybe<Carts_Stddev_Fields>;
  stddev_pop?: Maybe<Carts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Carts_Stddev_Samp_Fields>;
  sum?: Maybe<Carts_Sum_Fields>;
  var_pop?: Maybe<Carts_Var_Pop_Fields>;
  var_samp?: Maybe<Carts_Var_Samp_Fields>;
  variance?: Maybe<Carts_Variance_Fields>;
};


/** aggregate fields of "carts" */
export type Carts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Carts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "carts" */
export type Carts_Aggregate_Order_By = {
  avg?: InputMaybe<Carts_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Carts_Max_Order_By>;
  min?: InputMaybe<Carts_Min_Order_By>;
  stddev?: InputMaybe<Carts_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Carts_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Carts_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Carts_Sum_Order_By>;
  var_pop?: InputMaybe<Carts_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Carts_Var_Samp_Order_By>;
  variance?: InputMaybe<Carts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "carts" */
export type Carts_Arr_Rel_Insert_Input = {
  data: Array<Carts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Carts_On_Conflict>;
};

/** aggregate avg on columns */
export type Carts_Avg_Fields = {
  __typename?: 'carts_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  product_products?: Maybe<Scalars['Float']['output']>;
  /** 数量 */
  quantity?: Maybe<Scalars['Float']['output']>;
  user_users?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "carts" */
export type Carts_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  product_products?: InputMaybe<Order_By>;
  /** 数量 */
  quantity?: InputMaybe<Order_By>;
  user_users?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "carts". All fields are combined with a logical 'AND'. */
export type Carts_Bool_Exp = {
  _and?: InputMaybe<Array<Carts_Bool_Exp>>;
  _not?: InputMaybe<Carts_Bool_Exp>;
  _or?: InputMaybe<Array<Carts_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  is_selected?: InputMaybe<Boolean_Comparison_Exp>;
  product?: InputMaybe<Products_Bool_Exp>;
  product_products?: InputMaybe<Bigint_Comparison_Exp>;
  quantity?: InputMaybe<Bigint_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_users?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "carts" */
export enum Carts_Constraint {
  /** unique or primary key constraint on columns "id" */
  CartsPkey = 'carts_pkey'
}

/** input type for incrementing numeric columns in table "carts" */
export type Carts_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  product_products?: InputMaybe<Scalars['bigint']['input']>;
  /** 数量 */
  quantity?: InputMaybe<Scalars['bigint']['input']>;
  user_users?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "carts" */
export type Carts_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 是否选中 */
  is_selected?: InputMaybe<Scalars['Boolean']['input']>;
  product?: InputMaybe<Products_Obj_Rel_Insert_Input>;
  product_products?: InputMaybe<Scalars['bigint']['input']>;
  /** 数量 */
  quantity?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_users?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Carts_Max_Fields = {
  __typename?: 'carts_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  product_products?: Maybe<Scalars['bigint']['output']>;
  /** 数量 */
  quantity?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_users?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "carts" */
export type Carts_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  product_products?: InputMaybe<Order_By>;
  /** 数量 */
  quantity?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_users?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Carts_Min_Fields = {
  __typename?: 'carts_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  product_products?: Maybe<Scalars['bigint']['output']>;
  /** 数量 */
  quantity?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_users?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "carts" */
export type Carts_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  product_products?: InputMaybe<Order_By>;
  /** 数量 */
  quantity?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_users?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "carts" */
export type Carts_Mutation_Response = {
  __typename?: 'carts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Carts>;
};

/** on_conflict condition type for table "carts" */
export type Carts_On_Conflict = {
  constraint: Carts_Constraint;
  update_columns?: Array<Carts_Update_Column>;
  where?: InputMaybe<Carts_Bool_Exp>;
};

/** Ordering options when selecting data from "carts". */
export type Carts_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_selected?: InputMaybe<Order_By>;
  product?: InputMaybe<Products_Order_By>;
  product_products?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_users?: InputMaybe<Order_By>;
};

/** primary key columns input for table: carts */
export type Carts_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "carts" */
export enum Carts_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsSelected = 'is_selected',
  /** column name */
  ProductProducts = 'product_products',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserUsers = 'user_users'
}

/** select "carts_aggregate_bool_exp_bool_and_arguments_columns" columns of table "carts" */
export enum Carts_Select_Column_Carts_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsSelected = 'is_selected'
}

/** select "carts_aggregate_bool_exp_bool_or_arguments_columns" columns of table "carts" */
export enum Carts_Select_Column_Carts_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsSelected = 'is_selected'
}

/** input type for updating data in table "carts" */
export type Carts_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 是否选中 */
  is_selected?: InputMaybe<Scalars['Boolean']['input']>;
  product_products?: InputMaybe<Scalars['bigint']['input']>;
  /** 数量 */
  quantity?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_users?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Carts_Stddev_Fields = {
  __typename?: 'carts_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  product_products?: Maybe<Scalars['Float']['output']>;
  /** 数量 */
  quantity?: Maybe<Scalars['Float']['output']>;
  user_users?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "carts" */
export type Carts_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  product_products?: InputMaybe<Order_By>;
  /** 数量 */
  quantity?: InputMaybe<Order_By>;
  user_users?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Carts_Stddev_Pop_Fields = {
  __typename?: 'carts_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  product_products?: Maybe<Scalars['Float']['output']>;
  /** 数量 */
  quantity?: Maybe<Scalars['Float']['output']>;
  user_users?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "carts" */
export type Carts_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  product_products?: InputMaybe<Order_By>;
  /** 数量 */
  quantity?: InputMaybe<Order_By>;
  user_users?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Carts_Stddev_Samp_Fields = {
  __typename?: 'carts_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  product_products?: Maybe<Scalars['Float']['output']>;
  /** 数量 */
  quantity?: Maybe<Scalars['Float']['output']>;
  user_users?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "carts" */
export type Carts_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  product_products?: InputMaybe<Order_By>;
  /** 数量 */
  quantity?: InputMaybe<Order_By>;
  user_users?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "carts" */
export type Carts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Carts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Carts_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 是否选中 */
  is_selected?: InputMaybe<Scalars['Boolean']['input']>;
  product_products?: InputMaybe<Scalars['bigint']['input']>;
  /** 数量 */
  quantity?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_users?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Carts_Sum_Fields = {
  __typename?: 'carts_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  product_products?: Maybe<Scalars['bigint']['output']>;
  /** 数量 */
  quantity?: Maybe<Scalars['bigint']['output']>;
  user_users?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "carts" */
export type Carts_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  product_products?: InputMaybe<Order_By>;
  /** 数量 */
  quantity?: InputMaybe<Order_By>;
  user_users?: InputMaybe<Order_By>;
};

/** update columns of table "carts" */
export enum Carts_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsSelected = 'is_selected',
  /** column name */
  ProductProducts = 'product_products',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserUsers = 'user_users'
}

export type Carts_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Carts_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Carts_Set_Input>;
  /** filter the rows which have to be updated */
  where: Carts_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Carts_Var_Pop_Fields = {
  __typename?: 'carts_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  product_products?: Maybe<Scalars['Float']['output']>;
  /** 数量 */
  quantity?: Maybe<Scalars['Float']['output']>;
  user_users?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "carts" */
export type Carts_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  product_products?: InputMaybe<Order_By>;
  /** 数量 */
  quantity?: InputMaybe<Order_By>;
  user_users?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Carts_Var_Samp_Fields = {
  __typename?: 'carts_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  product_products?: Maybe<Scalars['Float']['output']>;
  /** 数量 */
  quantity?: Maybe<Scalars['Float']['output']>;
  user_users?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "carts" */
export type Carts_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  product_products?: InputMaybe<Order_By>;
  /** 数量 */
  quantity?: InputMaybe<Order_By>;
  user_users?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Carts_Variance_Fields = {
  __typename?: 'carts_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  product_products?: Maybe<Scalars['Float']['output']>;
  /** 数量 */
  quantity?: Maybe<Scalars['Float']['output']>;
  user_users?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "carts" */
export type Carts_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  product_products?: InputMaybe<Order_By>;
  /** 数量 */
  quantity?: InputMaybe<Order_By>;
  user_users?: InputMaybe<Order_By>;
};

/** 分类表 */
export type Categories = {
  __typename?: 'categories';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['bigint']['output'];
  /** 分类名称，如 苹果、香蕉、车厘子 */
  name: Scalars['String']['output'];
  /** An array relationship */
  products: Array<Products>;
  /** An aggregate relationship */
  products_aggregate: Products_Aggregate;
  updated_at: Scalars['timestamptz']['output'];
};


/** 分类表 */
export type CategoriesProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


/** 分类表 */
export type CategoriesProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};

/** aggregated selection of "categories" */
export type Categories_Aggregate = {
  __typename?: 'categories_aggregate';
  aggregate?: Maybe<Categories_Aggregate_Fields>;
  nodes: Array<Categories>;
};

/** aggregate fields of "categories" */
export type Categories_Aggregate_Fields = {
  __typename?: 'categories_aggregate_fields';
  avg?: Maybe<Categories_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Categories_Max_Fields>;
  min?: Maybe<Categories_Min_Fields>;
  stddev?: Maybe<Categories_Stddev_Fields>;
  stddev_pop?: Maybe<Categories_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Categories_Stddev_Samp_Fields>;
  sum?: Maybe<Categories_Sum_Fields>;
  var_pop?: Maybe<Categories_Var_Pop_Fields>;
  var_samp?: Maybe<Categories_Var_Samp_Fields>;
  variance?: Maybe<Categories_Variance_Fields>;
};


/** aggregate fields of "categories" */
export type Categories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Categories_Avg_Fields = {
  __typename?: 'categories_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
export type Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Categories_Bool_Exp>>;
  _not?: InputMaybe<Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Categories_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  products?: InputMaybe<Products_Bool_Exp>;
  products_aggregate?: InputMaybe<Products_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "categories" */
export enum Categories_Constraint {
  /** unique or primary key constraint on columns "id" */
  CategoriesPkey = 'categories_pkey'
}

/** input type for incrementing numeric columns in table "categories" */
export type Categories_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "categories" */
export type Categories_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 分类名称，如 苹果、香蕉、车厘子 */
  name?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<Products_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Categories_Max_Fields = {
  __typename?: 'categories_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 分类名称，如 苹果、香蕉、车厘子 */
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Categories_Min_Fields = {
  __typename?: 'categories_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 分类名称，如 苹果、香蕉、车厘子 */
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "categories" */
export type Categories_Mutation_Response = {
  __typename?: 'categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Categories>;
};

/** input type for inserting object relation for remote table "categories" */
export type Categories_Obj_Rel_Insert_Input = {
  data: Categories_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};

/** on_conflict condition type for table "categories" */
export type Categories_On_Conflict = {
  constraint: Categories_Constraint;
  update_columns?: Array<Categories_Update_Column>;
  where?: InputMaybe<Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "categories". */
export type Categories_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  products_aggregate?: InputMaybe<Products_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: categories */
export type Categories_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "categories" */
export enum Categories_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "categories" */
export type Categories_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 分类名称，如 苹果、香蕉、车厘子 */
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Categories_Stddev_Fields = {
  __typename?: 'categories_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Categories_Stddev_Pop_Fields = {
  __typename?: 'categories_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Categories_Stddev_Samp_Fields = {
  __typename?: 'categories_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "categories" */
export type Categories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Categories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Categories_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 分类名称，如 苹果、香蕉、车厘子 */
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Categories_Sum_Fields = {
  __typename?: 'categories_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "categories" */
export enum Categories_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Categories_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Categories_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Categories_Set_Input>;
  /** filter the rows which have to be updated */
  where: Categories_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Categories_Var_Pop_Fields = {
  __typename?: 'categories_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Categories_Var_Samp_Fields = {
  __typename?: 'categories_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Categories_Variance_Fields = {
  __typename?: 'categories_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** 果农表 */
export type Farmers = {
  __typename?: 'farmers';
  /** An array relationship */
  batches: Array<Batches>;
  /** An aggregate relationship */
  batches_aggregate: Batches_Aggregate;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['bigint']['output'];
  /** 名字 */
  name?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  user_users: Scalars['bigint']['output'];
};


/** 果农表 */
export type FarmersBatchesArgs = {
  distinct_on?: InputMaybe<Array<Batches_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Batches_Order_By>>;
  where?: InputMaybe<Batches_Bool_Exp>;
};


/** 果农表 */
export type FarmersBatches_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Batches_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Batches_Order_By>>;
  where?: InputMaybe<Batches_Bool_Exp>;
};

/** aggregated selection of "farmers" */
export type Farmers_Aggregate = {
  __typename?: 'farmers_aggregate';
  aggregate?: Maybe<Farmers_Aggregate_Fields>;
  nodes: Array<Farmers>;
};

export type Farmers_Aggregate_Bool_Exp = {
  count?: InputMaybe<Farmers_Aggregate_Bool_Exp_Count>;
};

export type Farmers_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Farmers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Farmers_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "farmers" */
export type Farmers_Aggregate_Fields = {
  __typename?: 'farmers_aggregate_fields';
  avg?: Maybe<Farmers_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Farmers_Max_Fields>;
  min?: Maybe<Farmers_Min_Fields>;
  stddev?: Maybe<Farmers_Stddev_Fields>;
  stddev_pop?: Maybe<Farmers_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Farmers_Stddev_Samp_Fields>;
  sum?: Maybe<Farmers_Sum_Fields>;
  var_pop?: Maybe<Farmers_Var_Pop_Fields>;
  var_samp?: Maybe<Farmers_Var_Samp_Fields>;
  variance?: Maybe<Farmers_Variance_Fields>;
};


/** aggregate fields of "farmers" */
export type Farmers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Farmers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "farmers" */
export type Farmers_Aggregate_Order_By = {
  avg?: InputMaybe<Farmers_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Farmers_Max_Order_By>;
  min?: InputMaybe<Farmers_Min_Order_By>;
  stddev?: InputMaybe<Farmers_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Farmers_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Farmers_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Farmers_Sum_Order_By>;
  var_pop?: InputMaybe<Farmers_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Farmers_Var_Samp_Order_By>;
  variance?: InputMaybe<Farmers_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "farmers" */
export type Farmers_Arr_Rel_Insert_Input = {
  data: Array<Farmers_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Farmers_On_Conflict>;
};

/** aggregate avg on columns */
export type Farmers_Avg_Fields = {
  __typename?: 'farmers_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_users?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "farmers" */
export type Farmers_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  user_users?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "farmers". All fields are combined with a logical 'AND'. */
export type Farmers_Bool_Exp = {
  _and?: InputMaybe<Array<Farmers_Bool_Exp>>;
  _not?: InputMaybe<Farmers_Bool_Exp>;
  _or?: InputMaybe<Array<Farmers_Bool_Exp>>;
  batches?: InputMaybe<Batches_Bool_Exp>;
  batches_aggregate?: InputMaybe<Batches_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_users?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "farmers" */
export enum Farmers_Constraint {
  /** unique or primary key constraint on columns "id" */
  FarmersPkey = 'farmers_pkey'
}

/** input type for incrementing numeric columns in table "farmers" */
export type Farmers_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  user_users?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "farmers" */
export type Farmers_Insert_Input = {
  batches?: InputMaybe<Batches_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 名字 */
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_users?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Farmers_Max_Fields = {
  __typename?: 'farmers_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 名字 */
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_users?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "farmers" */
export type Farmers_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 名字 */
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_users?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Farmers_Min_Fields = {
  __typename?: 'farmers_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 名字 */
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_users?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "farmers" */
export type Farmers_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 名字 */
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_users?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "farmers" */
export type Farmers_Mutation_Response = {
  __typename?: 'farmers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Farmers>;
};

/** input type for inserting object relation for remote table "farmers" */
export type Farmers_Obj_Rel_Insert_Input = {
  data: Farmers_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Farmers_On_Conflict>;
};

/** on_conflict condition type for table "farmers" */
export type Farmers_On_Conflict = {
  constraint: Farmers_Constraint;
  update_columns?: Array<Farmers_Update_Column>;
  where?: InputMaybe<Farmers_Bool_Exp>;
};

/** Ordering options when selecting data from "farmers". */
export type Farmers_Order_By = {
  batches_aggregate?: InputMaybe<Batches_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_users?: InputMaybe<Order_By>;
};

/** primary key columns input for table: farmers */
export type Farmers_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "farmers" */
export enum Farmers_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserUsers = 'user_users'
}

/** input type for updating data in table "farmers" */
export type Farmers_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 名字 */
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_users?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Farmers_Stddev_Fields = {
  __typename?: 'farmers_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_users?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "farmers" */
export type Farmers_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  user_users?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Farmers_Stddev_Pop_Fields = {
  __typename?: 'farmers_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_users?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "farmers" */
export type Farmers_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  user_users?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Farmers_Stddev_Samp_Fields = {
  __typename?: 'farmers_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_users?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "farmers" */
export type Farmers_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  user_users?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "farmers" */
export type Farmers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Farmers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Farmers_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 名字 */
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_users?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Farmers_Sum_Fields = {
  __typename?: 'farmers_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  user_users?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "farmers" */
export type Farmers_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  user_users?: InputMaybe<Order_By>;
};

/** update columns of table "farmers" */
export enum Farmers_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserUsers = 'user_users'
}

export type Farmers_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Farmers_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Farmers_Set_Input>;
  /** filter the rows which have to be updated */
  where: Farmers_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Farmers_Var_Pop_Fields = {
  __typename?: 'farmers_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_users?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "farmers" */
export type Farmers_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  user_users?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Farmers_Var_Samp_Fields = {
  __typename?: 'farmers_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_users?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "farmers" */
export type Farmers_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  user_users?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Farmers_Variance_Fields = {
  __typename?: 'farmers_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_users?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "farmers" */
export type Farmers_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  user_users?: InputMaybe<Order_By>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "batch_media_files" */
  delete_batch_media_files?: Maybe<Batch_Media_Files_Mutation_Response>;
  /** delete single row from the table: "batch_media_files" */
  delete_batch_media_files_by_pk?: Maybe<Batch_Media_Files>;
  /** delete data from the table: "batches" */
  delete_batches?: Maybe<Batches_Mutation_Response>;
  /** delete single row from the table: "batches" */
  delete_batches_by_pk?: Maybe<Batches>;
  /** delete data from the table: "carts" */
  delete_carts?: Maybe<Carts_Mutation_Response>;
  /** delete single row from the table: "carts" */
  delete_carts_by_pk?: Maybe<Carts>;
  /** delete data from the table: "categories" */
  delete_categories?: Maybe<Categories_Mutation_Response>;
  /** delete single row from the table: "categories" */
  delete_categories_by_pk?: Maybe<Categories>;
  /** delete data from the table: "farmers" */
  delete_farmers?: Maybe<Farmers_Mutation_Response>;
  /** delete single row from the table: "farmers" */
  delete_farmers_by_pk?: Maybe<Farmers>;
  /** delete data from the table: "order_delivery_media_files" */
  delete_order_delivery_media_files?: Maybe<Order_Delivery_Media_Files_Mutation_Response>;
  /** delete single row from the table: "order_delivery_media_files" */
  delete_order_delivery_media_files_by_pk?: Maybe<Order_Delivery_Media_Files>;
  /** delete data from the table: "order_products" */
  delete_order_products?: Maybe<Order_Products_Mutation_Response>;
  /** delete single row from the table: "order_products" */
  delete_order_products_by_pk?: Maybe<Order_Products>;
  /** delete data from the table: "orders" */
  delete_orders?: Maybe<Orders_Mutation_Response>;
  /** delete single row from the table: "orders" */
  delete_orders_by_pk?: Maybe<Orders>;
  /** delete data from the table: "origins" */
  delete_origins?: Maybe<Origins_Mutation_Response>;
  /** delete single row from the table: "origins" */
  delete_origins_by_pk?: Maybe<Origins>;
  /** delete data from the table: "products" */
  delete_products?: Maybe<Products_Mutation_Response>;
  /** delete single row from the table: "products" */
  delete_products_by_pk?: Maybe<Products>;
  /** delete data from the table: "user_roles" */
  delete_user_roles?: Maybe<User_Roles_Mutation_Response>;
  /** delete single row from the table: "user_roles" */
  delete_user_roles_by_pk?: Maybe<User_Roles>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "batch_media_files" */
  insert_batch_media_files?: Maybe<Batch_Media_Files_Mutation_Response>;
  /** insert a single row into the table: "batch_media_files" */
  insert_batch_media_files_one?: Maybe<Batch_Media_Files>;
  /** insert data into the table: "batches" */
  insert_batches?: Maybe<Batches_Mutation_Response>;
  /** insert a single row into the table: "batches" */
  insert_batches_one?: Maybe<Batches>;
  /** insert data into the table: "carts" */
  insert_carts?: Maybe<Carts_Mutation_Response>;
  /** insert a single row into the table: "carts" */
  insert_carts_one?: Maybe<Carts>;
  /** insert data into the table: "categories" */
  insert_categories?: Maybe<Categories_Mutation_Response>;
  /** insert a single row into the table: "categories" */
  insert_categories_one?: Maybe<Categories>;
  /** insert data into the table: "farmers" */
  insert_farmers?: Maybe<Farmers_Mutation_Response>;
  /** insert a single row into the table: "farmers" */
  insert_farmers_one?: Maybe<Farmers>;
  /** insert data into the table: "order_delivery_media_files" */
  insert_order_delivery_media_files?: Maybe<Order_Delivery_Media_Files_Mutation_Response>;
  /** insert a single row into the table: "order_delivery_media_files" */
  insert_order_delivery_media_files_one?: Maybe<Order_Delivery_Media_Files>;
  /** insert data into the table: "order_products" */
  insert_order_products?: Maybe<Order_Products_Mutation_Response>;
  /** insert a single row into the table: "order_products" */
  insert_order_products_one?: Maybe<Order_Products>;
  /** insert data into the table: "orders" */
  insert_orders?: Maybe<Orders_Mutation_Response>;
  /** insert a single row into the table: "orders" */
  insert_orders_one?: Maybe<Orders>;
  /** insert data into the table: "origins" */
  insert_origins?: Maybe<Origins_Mutation_Response>;
  /** insert a single row into the table: "origins" */
  insert_origins_one?: Maybe<Origins>;
  /** insert data into the table: "products" */
  insert_products?: Maybe<Products_Mutation_Response>;
  /** insert a single row into the table: "products" */
  insert_products_one?: Maybe<Products>;
  /** insert data into the table: "user_roles" */
  insert_user_roles?: Maybe<User_Roles_Mutation_Response>;
  /** insert a single row into the table: "user_roles" */
  insert_user_roles_one?: Maybe<User_Roles>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "batch_media_files" */
  update_batch_media_files?: Maybe<Batch_Media_Files_Mutation_Response>;
  /** update single row of the table: "batch_media_files" */
  update_batch_media_files_by_pk?: Maybe<Batch_Media_Files>;
  /** update multiples rows of table: "batch_media_files" */
  update_batch_media_files_many?: Maybe<Array<Maybe<Batch_Media_Files_Mutation_Response>>>;
  /** update data of the table: "batches" */
  update_batches?: Maybe<Batches_Mutation_Response>;
  /** update single row of the table: "batches" */
  update_batches_by_pk?: Maybe<Batches>;
  /** update multiples rows of table: "batches" */
  update_batches_many?: Maybe<Array<Maybe<Batches_Mutation_Response>>>;
  /** update data of the table: "carts" */
  update_carts?: Maybe<Carts_Mutation_Response>;
  /** update single row of the table: "carts" */
  update_carts_by_pk?: Maybe<Carts>;
  /** update multiples rows of table: "carts" */
  update_carts_many?: Maybe<Array<Maybe<Carts_Mutation_Response>>>;
  /** update data of the table: "categories" */
  update_categories?: Maybe<Categories_Mutation_Response>;
  /** update single row of the table: "categories" */
  update_categories_by_pk?: Maybe<Categories>;
  /** update multiples rows of table: "categories" */
  update_categories_many?: Maybe<Array<Maybe<Categories_Mutation_Response>>>;
  /** update data of the table: "farmers" */
  update_farmers?: Maybe<Farmers_Mutation_Response>;
  /** update single row of the table: "farmers" */
  update_farmers_by_pk?: Maybe<Farmers>;
  /** update multiples rows of table: "farmers" */
  update_farmers_many?: Maybe<Array<Maybe<Farmers_Mutation_Response>>>;
  /** update data of the table: "order_delivery_media_files" */
  update_order_delivery_media_files?: Maybe<Order_Delivery_Media_Files_Mutation_Response>;
  /** update single row of the table: "order_delivery_media_files" */
  update_order_delivery_media_files_by_pk?: Maybe<Order_Delivery_Media_Files>;
  /** update multiples rows of table: "order_delivery_media_files" */
  update_order_delivery_media_files_many?: Maybe<Array<Maybe<Order_Delivery_Media_Files_Mutation_Response>>>;
  /** update data of the table: "order_products" */
  update_order_products?: Maybe<Order_Products_Mutation_Response>;
  /** update single row of the table: "order_products" */
  update_order_products_by_pk?: Maybe<Order_Products>;
  /** update multiples rows of table: "order_products" */
  update_order_products_many?: Maybe<Array<Maybe<Order_Products_Mutation_Response>>>;
  /** update data of the table: "orders" */
  update_orders?: Maybe<Orders_Mutation_Response>;
  /** update single row of the table: "orders" */
  update_orders_by_pk?: Maybe<Orders>;
  /** update multiples rows of table: "orders" */
  update_orders_many?: Maybe<Array<Maybe<Orders_Mutation_Response>>>;
  /** update data of the table: "origins" */
  update_origins?: Maybe<Origins_Mutation_Response>;
  /** update single row of the table: "origins" */
  update_origins_by_pk?: Maybe<Origins>;
  /** update multiples rows of table: "origins" */
  update_origins_many?: Maybe<Array<Maybe<Origins_Mutation_Response>>>;
  /** update data of the table: "products" */
  update_products?: Maybe<Products_Mutation_Response>;
  /** update single row of the table: "products" */
  update_products_by_pk?: Maybe<Products>;
  /** update multiples rows of table: "products" */
  update_products_many?: Maybe<Array<Maybe<Products_Mutation_Response>>>;
  /** update data of the table: "user_roles" */
  update_user_roles?: Maybe<User_Roles_Mutation_Response>;
  /** update single row of the table: "user_roles" */
  update_user_roles_by_pk?: Maybe<User_Roles>;
  /** update multiples rows of table: "user_roles" */
  update_user_roles_many?: Maybe<Array<Maybe<User_Roles_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_Batch_Media_FilesArgs = {
  where: Batch_Media_Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Batch_Media_Files_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_BatchesArgs = {
  where: Batches_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Batches_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_CartsArgs = {
  where: Carts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Carts_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_CategoriesArgs = {
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Categories_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_FarmersArgs = {
  where: Farmers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Farmers_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Order_Delivery_Media_FilesArgs = {
  where: Order_Delivery_Media_Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Order_Delivery_Media_Files_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Order_ProductsArgs = {
  where: Order_Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Order_Products_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_OrdersArgs = {
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Orders_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_OriginsArgs = {
  where: Origins_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Origins_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ProductsArgs = {
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Products_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_User_RolesArgs = {
  where: User_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Roles_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootInsert_Batch_Media_FilesArgs = {
  objects: Array<Batch_Media_Files_Insert_Input>;
  on_conflict?: InputMaybe<Batch_Media_Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Batch_Media_Files_OneArgs = {
  object: Batch_Media_Files_Insert_Input;
  on_conflict?: InputMaybe<Batch_Media_Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_BatchesArgs = {
  objects: Array<Batches_Insert_Input>;
  on_conflict?: InputMaybe<Batches_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Batches_OneArgs = {
  object: Batches_Insert_Input;
  on_conflict?: InputMaybe<Batches_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CartsArgs = {
  objects: Array<Carts_Insert_Input>;
  on_conflict?: InputMaybe<Carts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Carts_OneArgs = {
  object: Carts_Insert_Input;
  on_conflict?: InputMaybe<Carts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CategoriesArgs = {
  objects: Array<Categories_Insert_Input>;
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Categories_OneArgs = {
  object: Categories_Insert_Input;
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_FarmersArgs = {
  objects: Array<Farmers_Insert_Input>;
  on_conflict?: InputMaybe<Farmers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Farmers_OneArgs = {
  object: Farmers_Insert_Input;
  on_conflict?: InputMaybe<Farmers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_Delivery_Media_FilesArgs = {
  objects: Array<Order_Delivery_Media_Files_Insert_Input>;
  on_conflict?: InputMaybe<Order_Delivery_Media_Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_Delivery_Media_Files_OneArgs = {
  object: Order_Delivery_Media_Files_Insert_Input;
  on_conflict?: InputMaybe<Order_Delivery_Media_Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_ProductsArgs = {
  objects: Array<Order_Products_Insert_Input>;
  on_conflict?: InputMaybe<Order_Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_Products_OneArgs = {
  object: Order_Products_Insert_Input;
  on_conflict?: InputMaybe<Order_Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrdersArgs = {
  objects: Array<Orders_Insert_Input>;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Orders_OneArgs = {
  object: Orders_Insert_Input;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OriginsArgs = {
  objects: Array<Origins_Insert_Input>;
  on_conflict?: InputMaybe<Origins_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Origins_OneArgs = {
  object: Origins_Insert_Input;
  on_conflict?: InputMaybe<Origins_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProductsArgs = {
  objects: Array<Products_Insert_Input>;
  on_conflict?: InputMaybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Products_OneArgs = {
  object: Products_Insert_Input;
  on_conflict?: InputMaybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_RolesArgs = {
  objects: Array<User_Roles_Insert_Input>;
  on_conflict?: InputMaybe<User_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Roles_OneArgs = {
  object: User_Roles_Insert_Input;
  on_conflict?: InputMaybe<User_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Batch_Media_FilesArgs = {
  _inc?: InputMaybe<Batch_Media_Files_Inc_Input>;
  _set?: InputMaybe<Batch_Media_Files_Set_Input>;
  where: Batch_Media_Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Batch_Media_Files_By_PkArgs = {
  _inc?: InputMaybe<Batch_Media_Files_Inc_Input>;
  _set?: InputMaybe<Batch_Media_Files_Set_Input>;
  pk_columns: Batch_Media_Files_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Batch_Media_Files_ManyArgs = {
  updates: Array<Batch_Media_Files_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_BatchesArgs = {
  _inc?: InputMaybe<Batches_Inc_Input>;
  _set?: InputMaybe<Batches_Set_Input>;
  where: Batches_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Batches_By_PkArgs = {
  _inc?: InputMaybe<Batches_Inc_Input>;
  _set?: InputMaybe<Batches_Set_Input>;
  pk_columns: Batches_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Batches_ManyArgs = {
  updates: Array<Batches_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CartsArgs = {
  _inc?: InputMaybe<Carts_Inc_Input>;
  _set?: InputMaybe<Carts_Set_Input>;
  where: Carts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Carts_By_PkArgs = {
  _inc?: InputMaybe<Carts_Inc_Input>;
  _set?: InputMaybe<Carts_Set_Input>;
  pk_columns: Carts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Carts_ManyArgs = {
  updates: Array<Carts_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CategoriesArgs = {
  _inc?: InputMaybe<Categories_Inc_Input>;
  _set?: InputMaybe<Categories_Set_Input>;
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Categories_By_PkArgs = {
  _inc?: InputMaybe<Categories_Inc_Input>;
  _set?: InputMaybe<Categories_Set_Input>;
  pk_columns: Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Categories_ManyArgs = {
  updates: Array<Categories_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_FarmersArgs = {
  _inc?: InputMaybe<Farmers_Inc_Input>;
  _set?: InputMaybe<Farmers_Set_Input>;
  where: Farmers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Farmers_By_PkArgs = {
  _inc?: InputMaybe<Farmers_Inc_Input>;
  _set?: InputMaybe<Farmers_Set_Input>;
  pk_columns: Farmers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Farmers_ManyArgs = {
  updates: Array<Farmers_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Order_Delivery_Media_FilesArgs = {
  _inc?: InputMaybe<Order_Delivery_Media_Files_Inc_Input>;
  _set?: InputMaybe<Order_Delivery_Media_Files_Set_Input>;
  where: Order_Delivery_Media_Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Order_Delivery_Media_Files_By_PkArgs = {
  _inc?: InputMaybe<Order_Delivery_Media_Files_Inc_Input>;
  _set?: InputMaybe<Order_Delivery_Media_Files_Set_Input>;
  pk_columns: Order_Delivery_Media_Files_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Order_Delivery_Media_Files_ManyArgs = {
  updates: Array<Order_Delivery_Media_Files_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Order_ProductsArgs = {
  _inc?: InputMaybe<Order_Products_Inc_Input>;
  _set?: InputMaybe<Order_Products_Set_Input>;
  where: Order_Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Order_Products_By_PkArgs = {
  _inc?: InputMaybe<Order_Products_Inc_Input>;
  _set?: InputMaybe<Order_Products_Set_Input>;
  pk_columns: Order_Products_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Order_Products_ManyArgs = {
  updates: Array<Order_Products_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_OrdersArgs = {
  _append?: InputMaybe<Orders_Append_Input>;
  _delete_at_path?: InputMaybe<Orders_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Orders_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Orders_Delete_Key_Input>;
  _inc?: InputMaybe<Orders_Inc_Input>;
  _prepend?: InputMaybe<Orders_Prepend_Input>;
  _set?: InputMaybe<Orders_Set_Input>;
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_By_PkArgs = {
  _append?: InputMaybe<Orders_Append_Input>;
  _delete_at_path?: InputMaybe<Orders_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Orders_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Orders_Delete_Key_Input>;
  _inc?: InputMaybe<Orders_Inc_Input>;
  _prepend?: InputMaybe<Orders_Prepend_Input>;
  _set?: InputMaybe<Orders_Set_Input>;
  pk_columns: Orders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_ManyArgs = {
  updates: Array<Orders_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_OriginsArgs = {
  _inc?: InputMaybe<Origins_Inc_Input>;
  _set?: InputMaybe<Origins_Set_Input>;
  where: Origins_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Origins_By_PkArgs = {
  _inc?: InputMaybe<Origins_Inc_Input>;
  _set?: InputMaybe<Origins_Set_Input>;
  pk_columns: Origins_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Origins_ManyArgs = {
  updates: Array<Origins_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ProductsArgs = {
  _inc?: InputMaybe<Products_Inc_Input>;
  _set?: InputMaybe<Products_Set_Input>;
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Products_By_PkArgs = {
  _inc?: InputMaybe<Products_Inc_Input>;
  _set?: InputMaybe<Products_Set_Input>;
  pk_columns: Products_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Products_ManyArgs = {
  updates: Array<Products_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_RolesArgs = {
  _inc?: InputMaybe<User_Roles_Inc_Input>;
  _set?: InputMaybe<User_Roles_Set_Input>;
  where: User_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Roles_By_PkArgs = {
  _inc?: InputMaybe<User_Roles_Inc_Input>;
  _set?: InputMaybe<User_Roles_Set_Input>;
  pk_columns: User_Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Roles_ManyArgs = {
  updates: Array<User_Roles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** 订单送达媒体文件表 */
export type Order_Delivery_Media_Files = {
  __typename?: 'order_delivery_media_files';
  created_at: Scalars['timestamptz']['output'];
  /** 文件类型：image/video */
  file_type: Scalars['String']['output'];
  file_url: Scalars['String']['output'];
  id: Scalars['bigint']['output'];
  /** 媒体分类：delivery/product/other（送达/产品/其他） */
  media_category: Scalars['String']['output'];
  /** An object relationship */
  order: Orders;
  order_orders: Scalars['bigint']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "order_delivery_media_files" */
export type Order_Delivery_Media_Files_Aggregate = {
  __typename?: 'order_delivery_media_files_aggregate';
  aggregate?: Maybe<Order_Delivery_Media_Files_Aggregate_Fields>;
  nodes: Array<Order_Delivery_Media_Files>;
};

export type Order_Delivery_Media_Files_Aggregate_Bool_Exp = {
  count?: InputMaybe<Order_Delivery_Media_Files_Aggregate_Bool_Exp_Count>;
};

export type Order_Delivery_Media_Files_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Order_Delivery_Media_Files_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Order_Delivery_Media_Files_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "order_delivery_media_files" */
export type Order_Delivery_Media_Files_Aggregate_Fields = {
  __typename?: 'order_delivery_media_files_aggregate_fields';
  avg?: Maybe<Order_Delivery_Media_Files_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Order_Delivery_Media_Files_Max_Fields>;
  min?: Maybe<Order_Delivery_Media_Files_Min_Fields>;
  stddev?: Maybe<Order_Delivery_Media_Files_Stddev_Fields>;
  stddev_pop?: Maybe<Order_Delivery_Media_Files_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Order_Delivery_Media_Files_Stddev_Samp_Fields>;
  sum?: Maybe<Order_Delivery_Media_Files_Sum_Fields>;
  var_pop?: Maybe<Order_Delivery_Media_Files_Var_Pop_Fields>;
  var_samp?: Maybe<Order_Delivery_Media_Files_Var_Samp_Fields>;
  variance?: Maybe<Order_Delivery_Media_Files_Variance_Fields>;
};


/** aggregate fields of "order_delivery_media_files" */
export type Order_Delivery_Media_Files_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Order_Delivery_Media_Files_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "order_delivery_media_files" */
export type Order_Delivery_Media_Files_Aggregate_Order_By = {
  avg?: InputMaybe<Order_Delivery_Media_Files_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Order_Delivery_Media_Files_Max_Order_By>;
  min?: InputMaybe<Order_Delivery_Media_Files_Min_Order_By>;
  stddev?: InputMaybe<Order_Delivery_Media_Files_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Order_Delivery_Media_Files_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Order_Delivery_Media_Files_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Order_Delivery_Media_Files_Sum_Order_By>;
  var_pop?: InputMaybe<Order_Delivery_Media_Files_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Order_Delivery_Media_Files_Var_Samp_Order_By>;
  variance?: InputMaybe<Order_Delivery_Media_Files_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "order_delivery_media_files" */
export type Order_Delivery_Media_Files_Arr_Rel_Insert_Input = {
  data: Array<Order_Delivery_Media_Files_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Order_Delivery_Media_Files_On_Conflict>;
};

/** aggregate avg on columns */
export type Order_Delivery_Media_Files_Avg_Fields = {
  __typename?: 'order_delivery_media_files_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  order_orders?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "order_delivery_media_files" */
export type Order_Delivery_Media_Files_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  order_orders?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "order_delivery_media_files". All fields are combined with a logical 'AND'. */
export type Order_Delivery_Media_Files_Bool_Exp = {
  _and?: InputMaybe<Array<Order_Delivery_Media_Files_Bool_Exp>>;
  _not?: InputMaybe<Order_Delivery_Media_Files_Bool_Exp>;
  _or?: InputMaybe<Array<Order_Delivery_Media_Files_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  file_type?: InputMaybe<String_Comparison_Exp>;
  file_url?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  media_category?: InputMaybe<String_Comparison_Exp>;
  order?: InputMaybe<Orders_Bool_Exp>;
  order_orders?: InputMaybe<Bigint_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "order_delivery_media_files" */
export enum Order_Delivery_Media_Files_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrderDeliveryMediaFilesPkey = 'order_delivery_media_files_pkey'
}

/** input type for incrementing numeric columns in table "order_delivery_media_files" */
export type Order_Delivery_Media_Files_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  order_orders?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "order_delivery_media_files" */
export type Order_Delivery_Media_Files_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 文件类型：image/video */
  file_type?: InputMaybe<Scalars['String']['input']>;
  file_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 媒体分类：delivery/product/other（送达/产品/其他） */
  media_category?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Orders_Obj_Rel_Insert_Input>;
  order_orders?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Order_Delivery_Media_Files_Max_Fields = {
  __typename?: 'order_delivery_media_files_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 文件类型：image/video */
  file_type?: Maybe<Scalars['String']['output']>;
  file_url?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 媒体分类：delivery/product/other（送达/产品/其他） */
  media_category?: Maybe<Scalars['String']['output']>;
  order_orders?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "order_delivery_media_files" */
export type Order_Delivery_Media_Files_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  /** 文件类型：image/video */
  file_type?: InputMaybe<Order_By>;
  file_url?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 媒体分类：delivery/product/other（送达/产品/其他） */
  media_category?: InputMaybe<Order_By>;
  order_orders?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Order_Delivery_Media_Files_Min_Fields = {
  __typename?: 'order_delivery_media_files_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 文件类型：image/video */
  file_type?: Maybe<Scalars['String']['output']>;
  file_url?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 媒体分类：delivery/product/other（送达/产品/其他） */
  media_category?: Maybe<Scalars['String']['output']>;
  order_orders?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "order_delivery_media_files" */
export type Order_Delivery_Media_Files_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  /** 文件类型：image/video */
  file_type?: InputMaybe<Order_By>;
  file_url?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 媒体分类：delivery/product/other（送达/产品/其他） */
  media_category?: InputMaybe<Order_By>;
  order_orders?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "order_delivery_media_files" */
export type Order_Delivery_Media_Files_Mutation_Response = {
  __typename?: 'order_delivery_media_files_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Order_Delivery_Media_Files>;
};

/** on_conflict condition type for table "order_delivery_media_files" */
export type Order_Delivery_Media_Files_On_Conflict = {
  constraint: Order_Delivery_Media_Files_Constraint;
  update_columns?: Array<Order_Delivery_Media_Files_Update_Column>;
  where?: InputMaybe<Order_Delivery_Media_Files_Bool_Exp>;
};

/** Ordering options when selecting data from "order_delivery_media_files". */
export type Order_Delivery_Media_Files_Order_By = {
  created_at?: InputMaybe<Order_By>;
  file_type?: InputMaybe<Order_By>;
  file_url?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  media_category?: InputMaybe<Order_By>;
  order?: InputMaybe<Orders_Order_By>;
  order_orders?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: order_delivery_media_files */
export type Order_Delivery_Media_Files_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "order_delivery_media_files" */
export enum Order_Delivery_Media_Files_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FileType = 'file_type',
  /** column name */
  FileUrl = 'file_url',
  /** column name */
  Id = 'id',
  /** column name */
  MediaCategory = 'media_category',
  /** column name */
  OrderOrders = 'order_orders',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "order_delivery_media_files" */
export type Order_Delivery_Media_Files_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 文件类型：image/video */
  file_type?: InputMaybe<Scalars['String']['input']>;
  file_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 媒体分类：delivery/product/other（送达/产品/其他） */
  media_category?: InputMaybe<Scalars['String']['input']>;
  order_orders?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Order_Delivery_Media_Files_Stddev_Fields = {
  __typename?: 'order_delivery_media_files_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  order_orders?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "order_delivery_media_files" */
export type Order_Delivery_Media_Files_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  order_orders?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Order_Delivery_Media_Files_Stddev_Pop_Fields = {
  __typename?: 'order_delivery_media_files_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  order_orders?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "order_delivery_media_files" */
export type Order_Delivery_Media_Files_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  order_orders?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Order_Delivery_Media_Files_Stddev_Samp_Fields = {
  __typename?: 'order_delivery_media_files_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  order_orders?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "order_delivery_media_files" */
export type Order_Delivery_Media_Files_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  order_orders?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "order_delivery_media_files" */
export type Order_Delivery_Media_Files_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Order_Delivery_Media_Files_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Order_Delivery_Media_Files_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 文件类型：image/video */
  file_type?: InputMaybe<Scalars['String']['input']>;
  file_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 媒体分类：delivery/product/other（送达/产品/其他） */
  media_category?: InputMaybe<Scalars['String']['input']>;
  order_orders?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Order_Delivery_Media_Files_Sum_Fields = {
  __typename?: 'order_delivery_media_files_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  order_orders?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "order_delivery_media_files" */
export type Order_Delivery_Media_Files_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  order_orders?: InputMaybe<Order_By>;
};

/** update columns of table "order_delivery_media_files" */
export enum Order_Delivery_Media_Files_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FileType = 'file_type',
  /** column name */
  FileUrl = 'file_url',
  /** column name */
  Id = 'id',
  /** column name */
  MediaCategory = 'media_category',
  /** column name */
  OrderOrders = 'order_orders',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Order_Delivery_Media_Files_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Order_Delivery_Media_Files_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Order_Delivery_Media_Files_Set_Input>;
  /** filter the rows which have to be updated */
  where: Order_Delivery_Media_Files_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Order_Delivery_Media_Files_Var_Pop_Fields = {
  __typename?: 'order_delivery_media_files_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  order_orders?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "order_delivery_media_files" */
export type Order_Delivery_Media_Files_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  order_orders?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Order_Delivery_Media_Files_Var_Samp_Fields = {
  __typename?: 'order_delivery_media_files_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  order_orders?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "order_delivery_media_files" */
export type Order_Delivery_Media_Files_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  order_orders?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Order_Delivery_Media_Files_Variance_Fields = {
  __typename?: 'order_delivery_media_files_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  order_orders?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "order_delivery_media_files" */
export type Order_Delivery_Media_Files_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  order_orders?: InputMaybe<Order_By>;
};

/** 订单产品列表 */
export type Order_Products = {
  __typename?: 'order_products';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['bigint']['output'];
  /** An object relationship */
  order: Orders;
  order_orders: Scalars['bigint']['output'];
  /** An object relationship */
  product: Products;
  /** 商品图片快照 */
  product_image_url?: Maybe<Scalars['String']['output']>;
  /** 商品名称快照 */
  product_name?: Maybe<Scalars['String']['output']>;
  product_products: Scalars['bigint']['output'];
  /** 商品单位快照 */
  product_unit?: Maybe<Scalars['String']['output']>;
  /** 购买数量 */
  quantity: Scalars['bigint']['output'];
  /** 商品总价（单价 × 数量） */
  total_price: Scalars['numeric']['output'];
  /** 商品单价快照（下单时的价格） */
  unit_price: Scalars['numeric']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "order_products" */
export type Order_Products_Aggregate = {
  __typename?: 'order_products_aggregate';
  aggregate?: Maybe<Order_Products_Aggregate_Fields>;
  nodes: Array<Order_Products>;
};

export type Order_Products_Aggregate_Bool_Exp = {
  count?: InputMaybe<Order_Products_Aggregate_Bool_Exp_Count>;
};

export type Order_Products_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Order_Products_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Order_Products_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "order_products" */
export type Order_Products_Aggregate_Fields = {
  __typename?: 'order_products_aggregate_fields';
  avg?: Maybe<Order_Products_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Order_Products_Max_Fields>;
  min?: Maybe<Order_Products_Min_Fields>;
  stddev?: Maybe<Order_Products_Stddev_Fields>;
  stddev_pop?: Maybe<Order_Products_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Order_Products_Stddev_Samp_Fields>;
  sum?: Maybe<Order_Products_Sum_Fields>;
  var_pop?: Maybe<Order_Products_Var_Pop_Fields>;
  var_samp?: Maybe<Order_Products_Var_Samp_Fields>;
  variance?: Maybe<Order_Products_Variance_Fields>;
};


/** aggregate fields of "order_products" */
export type Order_Products_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Order_Products_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "order_products" */
export type Order_Products_Aggregate_Order_By = {
  avg?: InputMaybe<Order_Products_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Order_Products_Max_Order_By>;
  min?: InputMaybe<Order_Products_Min_Order_By>;
  stddev?: InputMaybe<Order_Products_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Order_Products_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Order_Products_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Order_Products_Sum_Order_By>;
  var_pop?: InputMaybe<Order_Products_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Order_Products_Var_Samp_Order_By>;
  variance?: InputMaybe<Order_Products_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "order_products" */
export type Order_Products_Arr_Rel_Insert_Input = {
  data: Array<Order_Products_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Order_Products_On_Conflict>;
};

/** aggregate avg on columns */
export type Order_Products_Avg_Fields = {
  __typename?: 'order_products_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  order_orders?: Maybe<Scalars['Float']['output']>;
  product_products?: Maybe<Scalars['Float']['output']>;
  /** 购买数量 */
  quantity?: Maybe<Scalars['Float']['output']>;
  /** 商品总价（单价 × 数量） */
  total_price?: Maybe<Scalars['Float']['output']>;
  /** 商品单价快照（下单时的价格） */
  unit_price?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "order_products" */
export type Order_Products_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  order_orders?: InputMaybe<Order_By>;
  product_products?: InputMaybe<Order_By>;
  /** 购买数量 */
  quantity?: InputMaybe<Order_By>;
  /** 商品总价（单价 × 数量） */
  total_price?: InputMaybe<Order_By>;
  /** 商品单价快照（下单时的价格） */
  unit_price?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "order_products". All fields are combined with a logical 'AND'. */
export type Order_Products_Bool_Exp = {
  _and?: InputMaybe<Array<Order_Products_Bool_Exp>>;
  _not?: InputMaybe<Order_Products_Bool_Exp>;
  _or?: InputMaybe<Array<Order_Products_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  order?: InputMaybe<Orders_Bool_Exp>;
  order_orders?: InputMaybe<Bigint_Comparison_Exp>;
  product?: InputMaybe<Products_Bool_Exp>;
  product_image_url?: InputMaybe<String_Comparison_Exp>;
  product_name?: InputMaybe<String_Comparison_Exp>;
  product_products?: InputMaybe<Bigint_Comparison_Exp>;
  product_unit?: InputMaybe<String_Comparison_Exp>;
  quantity?: InputMaybe<Bigint_Comparison_Exp>;
  total_price?: InputMaybe<Numeric_Comparison_Exp>;
  unit_price?: InputMaybe<Numeric_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "order_products" */
export enum Order_Products_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrderProductsPkey = 'order_products_pkey'
}

/** input type for incrementing numeric columns in table "order_products" */
export type Order_Products_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  order_orders?: InputMaybe<Scalars['bigint']['input']>;
  product_products?: InputMaybe<Scalars['bigint']['input']>;
  /** 购买数量 */
  quantity?: InputMaybe<Scalars['bigint']['input']>;
  /** 商品总价（单价 × 数量） */
  total_price?: InputMaybe<Scalars['numeric']['input']>;
  /** 商品单价快照（下单时的价格） */
  unit_price?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "order_products" */
export type Order_Products_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  order?: InputMaybe<Orders_Obj_Rel_Insert_Input>;
  order_orders?: InputMaybe<Scalars['bigint']['input']>;
  product?: InputMaybe<Products_Obj_Rel_Insert_Input>;
  /** 商品图片快照 */
  product_image_url?: InputMaybe<Scalars['String']['input']>;
  /** 商品名称快照 */
  product_name?: InputMaybe<Scalars['String']['input']>;
  product_products?: InputMaybe<Scalars['bigint']['input']>;
  /** 商品单位快照 */
  product_unit?: InputMaybe<Scalars['String']['input']>;
  /** 购买数量 */
  quantity?: InputMaybe<Scalars['bigint']['input']>;
  /** 商品总价（单价 × 数量） */
  total_price?: InputMaybe<Scalars['numeric']['input']>;
  /** 商品单价快照（下单时的价格） */
  unit_price?: InputMaybe<Scalars['numeric']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Order_Products_Max_Fields = {
  __typename?: 'order_products_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  order_orders?: Maybe<Scalars['bigint']['output']>;
  /** 商品图片快照 */
  product_image_url?: Maybe<Scalars['String']['output']>;
  /** 商品名称快照 */
  product_name?: Maybe<Scalars['String']['output']>;
  product_products?: Maybe<Scalars['bigint']['output']>;
  /** 商品单位快照 */
  product_unit?: Maybe<Scalars['String']['output']>;
  /** 购买数量 */
  quantity?: Maybe<Scalars['bigint']['output']>;
  /** 商品总价（单价 × 数量） */
  total_price?: Maybe<Scalars['numeric']['output']>;
  /** 商品单价快照（下单时的价格） */
  unit_price?: Maybe<Scalars['numeric']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "order_products" */
export type Order_Products_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_orders?: InputMaybe<Order_By>;
  /** 商品图片快照 */
  product_image_url?: InputMaybe<Order_By>;
  /** 商品名称快照 */
  product_name?: InputMaybe<Order_By>;
  product_products?: InputMaybe<Order_By>;
  /** 商品单位快照 */
  product_unit?: InputMaybe<Order_By>;
  /** 购买数量 */
  quantity?: InputMaybe<Order_By>;
  /** 商品总价（单价 × 数量） */
  total_price?: InputMaybe<Order_By>;
  /** 商品单价快照（下单时的价格） */
  unit_price?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Order_Products_Min_Fields = {
  __typename?: 'order_products_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  order_orders?: Maybe<Scalars['bigint']['output']>;
  /** 商品图片快照 */
  product_image_url?: Maybe<Scalars['String']['output']>;
  /** 商品名称快照 */
  product_name?: Maybe<Scalars['String']['output']>;
  product_products?: Maybe<Scalars['bigint']['output']>;
  /** 商品单位快照 */
  product_unit?: Maybe<Scalars['String']['output']>;
  /** 购买数量 */
  quantity?: Maybe<Scalars['bigint']['output']>;
  /** 商品总价（单价 × 数量） */
  total_price?: Maybe<Scalars['numeric']['output']>;
  /** 商品单价快照（下单时的价格） */
  unit_price?: Maybe<Scalars['numeric']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "order_products" */
export type Order_Products_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_orders?: InputMaybe<Order_By>;
  /** 商品图片快照 */
  product_image_url?: InputMaybe<Order_By>;
  /** 商品名称快照 */
  product_name?: InputMaybe<Order_By>;
  product_products?: InputMaybe<Order_By>;
  /** 商品单位快照 */
  product_unit?: InputMaybe<Order_By>;
  /** 购买数量 */
  quantity?: InputMaybe<Order_By>;
  /** 商品总价（单价 × 数量） */
  total_price?: InputMaybe<Order_By>;
  /** 商品单价快照（下单时的价格） */
  unit_price?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "order_products" */
export type Order_Products_Mutation_Response = {
  __typename?: 'order_products_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Order_Products>;
};

/** on_conflict condition type for table "order_products" */
export type Order_Products_On_Conflict = {
  constraint: Order_Products_Constraint;
  update_columns?: Array<Order_Products_Update_Column>;
  where?: InputMaybe<Order_Products_Bool_Exp>;
};

/** Ordering options when selecting data from "order_products". */
export type Order_Products_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Orders_Order_By>;
  order_orders?: InputMaybe<Order_By>;
  product?: InputMaybe<Products_Order_By>;
  product_image_url?: InputMaybe<Order_By>;
  product_name?: InputMaybe<Order_By>;
  product_products?: InputMaybe<Order_By>;
  product_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  total_price?: InputMaybe<Order_By>;
  unit_price?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: order_products */
export type Order_Products_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "order_products" */
export enum Order_Products_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  OrderOrders = 'order_orders',
  /** column name */
  ProductImageUrl = 'product_image_url',
  /** column name */
  ProductName = 'product_name',
  /** column name */
  ProductProducts = 'product_products',
  /** column name */
  ProductUnit = 'product_unit',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  TotalPrice = 'total_price',
  /** column name */
  UnitPrice = 'unit_price',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "order_products" */
export type Order_Products_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  order_orders?: InputMaybe<Scalars['bigint']['input']>;
  /** 商品图片快照 */
  product_image_url?: InputMaybe<Scalars['String']['input']>;
  /** 商品名称快照 */
  product_name?: InputMaybe<Scalars['String']['input']>;
  product_products?: InputMaybe<Scalars['bigint']['input']>;
  /** 商品单位快照 */
  product_unit?: InputMaybe<Scalars['String']['input']>;
  /** 购买数量 */
  quantity?: InputMaybe<Scalars['bigint']['input']>;
  /** 商品总价（单价 × 数量） */
  total_price?: InputMaybe<Scalars['numeric']['input']>;
  /** 商品单价快照（下单时的价格） */
  unit_price?: InputMaybe<Scalars['numeric']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Order_Products_Stddev_Fields = {
  __typename?: 'order_products_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  order_orders?: Maybe<Scalars['Float']['output']>;
  product_products?: Maybe<Scalars['Float']['output']>;
  /** 购买数量 */
  quantity?: Maybe<Scalars['Float']['output']>;
  /** 商品总价（单价 × 数量） */
  total_price?: Maybe<Scalars['Float']['output']>;
  /** 商品单价快照（下单时的价格） */
  unit_price?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "order_products" */
export type Order_Products_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  order_orders?: InputMaybe<Order_By>;
  product_products?: InputMaybe<Order_By>;
  /** 购买数量 */
  quantity?: InputMaybe<Order_By>;
  /** 商品总价（单价 × 数量） */
  total_price?: InputMaybe<Order_By>;
  /** 商品单价快照（下单时的价格） */
  unit_price?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Order_Products_Stddev_Pop_Fields = {
  __typename?: 'order_products_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  order_orders?: Maybe<Scalars['Float']['output']>;
  product_products?: Maybe<Scalars['Float']['output']>;
  /** 购买数量 */
  quantity?: Maybe<Scalars['Float']['output']>;
  /** 商品总价（单价 × 数量） */
  total_price?: Maybe<Scalars['Float']['output']>;
  /** 商品单价快照（下单时的价格） */
  unit_price?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "order_products" */
export type Order_Products_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  order_orders?: InputMaybe<Order_By>;
  product_products?: InputMaybe<Order_By>;
  /** 购买数量 */
  quantity?: InputMaybe<Order_By>;
  /** 商品总价（单价 × 数量） */
  total_price?: InputMaybe<Order_By>;
  /** 商品单价快照（下单时的价格） */
  unit_price?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Order_Products_Stddev_Samp_Fields = {
  __typename?: 'order_products_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  order_orders?: Maybe<Scalars['Float']['output']>;
  product_products?: Maybe<Scalars['Float']['output']>;
  /** 购买数量 */
  quantity?: Maybe<Scalars['Float']['output']>;
  /** 商品总价（单价 × 数量） */
  total_price?: Maybe<Scalars['Float']['output']>;
  /** 商品单价快照（下单时的价格） */
  unit_price?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "order_products" */
export type Order_Products_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  order_orders?: InputMaybe<Order_By>;
  product_products?: InputMaybe<Order_By>;
  /** 购买数量 */
  quantity?: InputMaybe<Order_By>;
  /** 商品总价（单价 × 数量） */
  total_price?: InputMaybe<Order_By>;
  /** 商品单价快照（下单时的价格） */
  unit_price?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "order_products" */
export type Order_Products_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Order_Products_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Order_Products_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  order_orders?: InputMaybe<Scalars['bigint']['input']>;
  /** 商品图片快照 */
  product_image_url?: InputMaybe<Scalars['String']['input']>;
  /** 商品名称快照 */
  product_name?: InputMaybe<Scalars['String']['input']>;
  product_products?: InputMaybe<Scalars['bigint']['input']>;
  /** 商品单位快照 */
  product_unit?: InputMaybe<Scalars['String']['input']>;
  /** 购买数量 */
  quantity?: InputMaybe<Scalars['bigint']['input']>;
  /** 商品总价（单价 × 数量） */
  total_price?: InputMaybe<Scalars['numeric']['input']>;
  /** 商品单价快照（下单时的价格） */
  unit_price?: InputMaybe<Scalars['numeric']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Order_Products_Sum_Fields = {
  __typename?: 'order_products_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  order_orders?: Maybe<Scalars['bigint']['output']>;
  product_products?: Maybe<Scalars['bigint']['output']>;
  /** 购买数量 */
  quantity?: Maybe<Scalars['bigint']['output']>;
  /** 商品总价（单价 × 数量） */
  total_price?: Maybe<Scalars['numeric']['output']>;
  /** 商品单价快照（下单时的价格） */
  unit_price?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "order_products" */
export type Order_Products_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  order_orders?: InputMaybe<Order_By>;
  product_products?: InputMaybe<Order_By>;
  /** 购买数量 */
  quantity?: InputMaybe<Order_By>;
  /** 商品总价（单价 × 数量） */
  total_price?: InputMaybe<Order_By>;
  /** 商品单价快照（下单时的价格） */
  unit_price?: InputMaybe<Order_By>;
};

/** update columns of table "order_products" */
export enum Order_Products_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  OrderOrders = 'order_orders',
  /** column name */
  ProductImageUrl = 'product_image_url',
  /** column name */
  ProductName = 'product_name',
  /** column name */
  ProductProducts = 'product_products',
  /** column name */
  ProductUnit = 'product_unit',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  TotalPrice = 'total_price',
  /** column name */
  UnitPrice = 'unit_price',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Order_Products_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Order_Products_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Order_Products_Set_Input>;
  /** filter the rows which have to be updated */
  where: Order_Products_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Order_Products_Var_Pop_Fields = {
  __typename?: 'order_products_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  order_orders?: Maybe<Scalars['Float']['output']>;
  product_products?: Maybe<Scalars['Float']['output']>;
  /** 购买数量 */
  quantity?: Maybe<Scalars['Float']['output']>;
  /** 商品总价（单价 × 数量） */
  total_price?: Maybe<Scalars['Float']['output']>;
  /** 商品单价快照（下单时的价格） */
  unit_price?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "order_products" */
export type Order_Products_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  order_orders?: InputMaybe<Order_By>;
  product_products?: InputMaybe<Order_By>;
  /** 购买数量 */
  quantity?: InputMaybe<Order_By>;
  /** 商品总价（单价 × 数量） */
  total_price?: InputMaybe<Order_By>;
  /** 商品单价快照（下单时的价格） */
  unit_price?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Order_Products_Var_Samp_Fields = {
  __typename?: 'order_products_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  order_orders?: Maybe<Scalars['Float']['output']>;
  product_products?: Maybe<Scalars['Float']['output']>;
  /** 购买数量 */
  quantity?: Maybe<Scalars['Float']['output']>;
  /** 商品总价（单价 × 数量） */
  total_price?: Maybe<Scalars['Float']['output']>;
  /** 商品单价快照（下单时的价格） */
  unit_price?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "order_products" */
export type Order_Products_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  order_orders?: InputMaybe<Order_By>;
  product_products?: InputMaybe<Order_By>;
  /** 购买数量 */
  quantity?: InputMaybe<Order_By>;
  /** 商品总价（单价 × 数量） */
  total_price?: InputMaybe<Order_By>;
  /** 商品单价快照（下单时的价格） */
  unit_price?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Order_Products_Variance_Fields = {
  __typename?: 'order_products_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  order_orders?: Maybe<Scalars['Float']['output']>;
  product_products?: Maybe<Scalars['Float']['output']>;
  /** 购买数量 */
  quantity?: Maybe<Scalars['Float']['output']>;
  /** 商品总价（单价 × 数量） */
  total_price?: Maybe<Scalars['Float']['output']>;
  /** 商品单价快照（下单时的价格） */
  unit_price?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "order_products" */
export type Order_Products_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  order_orders?: InputMaybe<Order_By>;
  product_products?: InputMaybe<Order_By>;
  /** 购买数量 */
  quantity?: InputMaybe<Order_By>;
  /** 商品总价（单价 × 数量） */
  total_price?: InputMaybe<Order_By>;
  /** 商品单价快照（下单时的价格） */
  unit_price?: InputMaybe<Order_By>;
};

/** 订单表 */
export type Orders = {
  __typename?: 'orders';
  /** 异常信息备注（异常原因、处理方式等） */
  abnormal_remark?: Maybe<Scalars['String']['output']>;
  /** 实际支付金额 */
  actual_amount: Scalars['numeric']['output'];
  /** 管理员备注 */
  admin_remark?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['timestamptz']['output'];
  /** -- 格式示例：   -- {   --   "receiver_name": "张三",   --   "receiver_phone": "13800138000",   --   "province": "广东省",   --   "city": "深圳市",   --   "district": "南山区",   --   "detail_address": "科技园南路100号",   --   "postal_code": "518000"   -- } */
  delivery_address?: Maybe<Scalars['jsonb']['output']>;
  /** 优惠金额（优惠券、满减等） */
  discount_amount: Scalars['numeric']['output'];
  /** 运费 */
  freight_amount: Scalars['numeric']['output'];
  id: Scalars['bigint']['output'];
  /** 是否存在异常 */
  is_abnormal: Scalars['Boolean']['output'];
  /** 软删除标记 */
  is_deleted: Scalars['Boolean']['output'];
  /** An array relationship */
  order_delivery_media_files: Array<Order_Delivery_Media_Files>;
  /** An aggregate relationship */
  order_delivery_media_files_aggregate: Order_Delivery_Media_Files_Aggregate;
  /** An array relationship */
  order_products: Array<Order_Products>;
  /** An aggregate relationship */
  order_products_aggregate: Order_Products_Aggregate;
  /** -- 状态值：   -- pending: 等待确认（管理员没有确认，用户可能上传了打款截图，也可能没有）   -- confirmed: 已确认（管理员完成确认了，此时会锁库存）   -- cancelled: 已取消/失效（管理员拒绝了或者用户没有付款自动取消）   -- completed: 已完成（订单完成结束） */
  order_status?: Maybe<Scalars['String']['output']>;
  /** -- 支付审核状态：   -- pending: 待支付（用户尚未上传打款凭证）   -- submitted: 已提交（用户已上传打款凭证，等待审核）   -- approved: 审核通过（管理员审核通过，确认收到打款）   -- rejected: 审核拒绝（管理员审核拒绝，需要用户重新提交） */
  payment_status?: Maybe<Scalars['String']['output']>;
  /** 支付凭证图片URL（打款截图） */
  payment_voucher_url?: Maybe<Scalars['String']['output']>;
  /** 订单备注（用户留言） */
  remark?: Maybe<Scalars['String']['output']>;
  /** 商品总金额 */
  total_amount: Scalars['numeric']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  user_users: Scalars['bigint']['output'];
};


/** 订单表 */
export type OrdersDelivery_AddressArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** 订单表 */
export type OrdersOrder_Delivery_Media_FilesArgs = {
  distinct_on?: InputMaybe<Array<Order_Delivery_Media_Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Delivery_Media_Files_Order_By>>;
  where?: InputMaybe<Order_Delivery_Media_Files_Bool_Exp>;
};


/** 订单表 */
export type OrdersOrder_Delivery_Media_Files_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Delivery_Media_Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Delivery_Media_Files_Order_By>>;
  where?: InputMaybe<Order_Delivery_Media_Files_Bool_Exp>;
};


/** 订单表 */
export type OrdersOrder_ProductsArgs = {
  distinct_on?: InputMaybe<Array<Order_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Products_Order_By>>;
  where?: InputMaybe<Order_Products_Bool_Exp>;
};


/** 订单表 */
export type OrdersOrder_Products_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Products_Order_By>>;
  where?: InputMaybe<Order_Products_Bool_Exp>;
};

/** aggregated selection of "orders" */
export type Orders_Aggregate = {
  __typename?: 'orders_aggregate';
  aggregate?: Maybe<Orders_Aggregate_Fields>;
  nodes: Array<Orders>;
};

export type Orders_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Orders_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Orders_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Orders_Aggregate_Bool_Exp_Count>;
};

export type Orders_Aggregate_Bool_Exp_Bool_And = {
  arguments: Orders_Select_Column_Orders_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Orders_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Orders_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Orders_Select_Column_Orders_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Orders_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Orders_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Orders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Orders_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "orders" */
export type Orders_Aggregate_Fields = {
  __typename?: 'orders_aggregate_fields';
  avg?: Maybe<Orders_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Orders_Max_Fields>;
  min?: Maybe<Orders_Min_Fields>;
  stddev?: Maybe<Orders_Stddev_Fields>;
  stddev_pop?: Maybe<Orders_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Orders_Stddev_Samp_Fields>;
  sum?: Maybe<Orders_Sum_Fields>;
  var_pop?: Maybe<Orders_Var_Pop_Fields>;
  var_samp?: Maybe<Orders_Var_Samp_Fields>;
  variance?: Maybe<Orders_Variance_Fields>;
};


/** aggregate fields of "orders" */
export type Orders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Orders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "orders" */
export type Orders_Aggregate_Order_By = {
  avg?: InputMaybe<Orders_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Orders_Max_Order_By>;
  min?: InputMaybe<Orders_Min_Order_By>;
  stddev?: InputMaybe<Orders_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Orders_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Orders_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Orders_Sum_Order_By>;
  var_pop?: InputMaybe<Orders_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Orders_Var_Samp_Order_By>;
  variance?: InputMaybe<Orders_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Orders_Append_Input = {
  /** -- 格式示例：   -- {   --   "receiver_name": "张三",   --   "receiver_phone": "13800138000",   --   "province": "广东省",   --   "city": "深圳市",   --   "district": "南山区",   --   "detail_address": "科技园南路100号",   --   "postal_code": "518000"   -- } */
  delivery_address?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "orders" */
export type Orders_Arr_Rel_Insert_Input = {
  data: Array<Orders_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};

/** aggregate avg on columns */
export type Orders_Avg_Fields = {
  __typename?: 'orders_avg_fields';
  /** 实际支付金额 */
  actual_amount?: Maybe<Scalars['Float']['output']>;
  /** 优惠金额（优惠券、满减等） */
  discount_amount?: Maybe<Scalars['Float']['output']>;
  /** 运费 */
  freight_amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 商品总金额 */
  total_amount?: Maybe<Scalars['Float']['output']>;
  user_users?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "orders" */
export type Orders_Avg_Order_By = {
  /** 实际支付金额 */
  actual_amount?: InputMaybe<Order_By>;
  /** 优惠金额（优惠券、满减等） */
  discount_amount?: InputMaybe<Order_By>;
  /** 运费 */
  freight_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 商品总金额 */
  total_amount?: InputMaybe<Order_By>;
  user_users?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "orders". All fields are combined with a logical 'AND'. */
export type Orders_Bool_Exp = {
  _and?: InputMaybe<Array<Orders_Bool_Exp>>;
  _not?: InputMaybe<Orders_Bool_Exp>;
  _or?: InputMaybe<Array<Orders_Bool_Exp>>;
  abnormal_remark?: InputMaybe<String_Comparison_Exp>;
  actual_amount?: InputMaybe<Numeric_Comparison_Exp>;
  admin_remark?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  delivery_address?: InputMaybe<Jsonb_Comparison_Exp>;
  discount_amount?: InputMaybe<Numeric_Comparison_Exp>;
  freight_amount?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  is_abnormal?: InputMaybe<Boolean_Comparison_Exp>;
  is_deleted?: InputMaybe<Boolean_Comparison_Exp>;
  order_delivery_media_files?: InputMaybe<Order_Delivery_Media_Files_Bool_Exp>;
  order_delivery_media_files_aggregate?: InputMaybe<Order_Delivery_Media_Files_Aggregate_Bool_Exp>;
  order_products?: InputMaybe<Order_Products_Bool_Exp>;
  order_products_aggregate?: InputMaybe<Order_Products_Aggregate_Bool_Exp>;
  order_status?: InputMaybe<String_Comparison_Exp>;
  payment_status?: InputMaybe<String_Comparison_Exp>;
  payment_voucher_url?: InputMaybe<String_Comparison_Exp>;
  remark?: InputMaybe<String_Comparison_Exp>;
  total_amount?: InputMaybe<Numeric_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_users?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "orders" */
export enum Orders_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrdersPkey = 'orders_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Orders_Delete_At_Path_Input = {
  /** -- 格式示例：   -- {   --   "receiver_name": "张三",   --   "receiver_phone": "13800138000",   --   "province": "广东省",   --   "city": "深圳市",   --   "district": "南山区",   --   "detail_address": "科技园南路100号",   --   "postal_code": "518000"   -- } */
  delivery_address?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Orders_Delete_Elem_Input = {
  /** -- 格式示例：   -- {   --   "receiver_name": "张三",   --   "receiver_phone": "13800138000",   --   "province": "广东省",   --   "city": "深圳市",   --   "district": "南山区",   --   "detail_address": "科技园南路100号",   --   "postal_code": "518000"   -- } */
  delivery_address?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Orders_Delete_Key_Input = {
  /** -- 格式示例：   -- {   --   "receiver_name": "张三",   --   "receiver_phone": "13800138000",   --   "province": "广东省",   --   "city": "深圳市",   --   "district": "南山区",   --   "detail_address": "科技园南路100号",   --   "postal_code": "518000"   -- } */
  delivery_address?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "orders" */
export type Orders_Inc_Input = {
  /** 实际支付金额 */
  actual_amount?: InputMaybe<Scalars['numeric']['input']>;
  /** 优惠金额（优惠券、满减等） */
  discount_amount?: InputMaybe<Scalars['numeric']['input']>;
  /** 运费 */
  freight_amount?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 商品总金额 */
  total_amount?: InputMaybe<Scalars['numeric']['input']>;
  user_users?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "orders" */
export type Orders_Insert_Input = {
  /** 异常信息备注（异常原因、处理方式等） */
  abnormal_remark?: InputMaybe<Scalars['String']['input']>;
  /** 实际支付金额 */
  actual_amount?: InputMaybe<Scalars['numeric']['input']>;
  /** 管理员备注 */
  admin_remark?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** -- 格式示例：   -- {   --   "receiver_name": "张三",   --   "receiver_phone": "13800138000",   --   "province": "广东省",   --   "city": "深圳市",   --   "district": "南山区",   --   "detail_address": "科技园南路100号",   --   "postal_code": "518000"   -- } */
  delivery_address?: InputMaybe<Scalars['jsonb']['input']>;
  /** 优惠金额（优惠券、满减等） */
  discount_amount?: InputMaybe<Scalars['numeric']['input']>;
  /** 运费 */
  freight_amount?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 是否存在异常 */
  is_abnormal?: InputMaybe<Scalars['Boolean']['input']>;
  /** 软删除标记 */
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  order_delivery_media_files?: InputMaybe<Order_Delivery_Media_Files_Arr_Rel_Insert_Input>;
  order_products?: InputMaybe<Order_Products_Arr_Rel_Insert_Input>;
  /** -- 状态值：   -- pending: 等待确认（管理员没有确认，用户可能上传了打款截图，也可能没有）   -- confirmed: 已确认（管理员完成确认了，此时会锁库存）   -- cancelled: 已取消/失效（管理员拒绝了或者用户没有付款自动取消）   -- completed: 已完成（订单完成结束） */
  order_status?: InputMaybe<Scalars['String']['input']>;
  /** -- 支付审核状态：   -- pending: 待支付（用户尚未上传打款凭证）   -- submitted: 已提交（用户已上传打款凭证，等待审核）   -- approved: 审核通过（管理员审核通过，确认收到打款）   -- rejected: 审核拒绝（管理员审核拒绝，需要用户重新提交） */
  payment_status?: InputMaybe<Scalars['String']['input']>;
  /** 支付凭证图片URL（打款截图） */
  payment_voucher_url?: InputMaybe<Scalars['String']['input']>;
  /** 订单备注（用户留言） */
  remark?: InputMaybe<Scalars['String']['input']>;
  /** 商品总金额 */
  total_amount?: InputMaybe<Scalars['numeric']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_users?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Orders_Max_Fields = {
  __typename?: 'orders_max_fields';
  /** 异常信息备注（异常原因、处理方式等） */
  abnormal_remark?: Maybe<Scalars['String']['output']>;
  /** 实际支付金额 */
  actual_amount?: Maybe<Scalars['numeric']['output']>;
  /** 管理员备注 */
  admin_remark?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 优惠金额（优惠券、满减等） */
  discount_amount?: Maybe<Scalars['numeric']['output']>;
  /** 运费 */
  freight_amount?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** -- 状态值：   -- pending: 等待确认（管理员没有确认，用户可能上传了打款截图，也可能没有）   -- confirmed: 已确认（管理员完成确认了，此时会锁库存）   -- cancelled: 已取消/失效（管理员拒绝了或者用户没有付款自动取消）   -- completed: 已完成（订单完成结束） */
  order_status?: Maybe<Scalars['String']['output']>;
  /** -- 支付审核状态：   -- pending: 待支付（用户尚未上传打款凭证）   -- submitted: 已提交（用户已上传打款凭证，等待审核）   -- approved: 审核通过（管理员审核通过，确认收到打款）   -- rejected: 审核拒绝（管理员审核拒绝，需要用户重新提交） */
  payment_status?: Maybe<Scalars['String']['output']>;
  /** 支付凭证图片URL（打款截图） */
  payment_voucher_url?: Maybe<Scalars['String']['output']>;
  /** 订单备注（用户留言） */
  remark?: Maybe<Scalars['String']['output']>;
  /** 商品总金额 */
  total_amount?: Maybe<Scalars['numeric']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_users?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "orders" */
export type Orders_Max_Order_By = {
  /** 异常信息备注（异常原因、处理方式等） */
  abnormal_remark?: InputMaybe<Order_By>;
  /** 实际支付金额 */
  actual_amount?: InputMaybe<Order_By>;
  /** 管理员备注 */
  admin_remark?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  /** 优惠金额（优惠券、满减等） */
  discount_amount?: InputMaybe<Order_By>;
  /** 运费 */
  freight_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** -- 状态值：   -- pending: 等待确认（管理员没有确认，用户可能上传了打款截图，也可能没有）   -- confirmed: 已确认（管理员完成确认了，此时会锁库存）   -- cancelled: 已取消/失效（管理员拒绝了或者用户没有付款自动取消）   -- completed: 已完成（订单完成结束） */
  order_status?: InputMaybe<Order_By>;
  /** -- 支付审核状态：   -- pending: 待支付（用户尚未上传打款凭证）   -- submitted: 已提交（用户已上传打款凭证，等待审核）   -- approved: 审核通过（管理员审核通过，确认收到打款）   -- rejected: 审核拒绝（管理员审核拒绝，需要用户重新提交） */
  payment_status?: InputMaybe<Order_By>;
  /** 支付凭证图片URL（打款截图） */
  payment_voucher_url?: InputMaybe<Order_By>;
  /** 订单备注（用户留言） */
  remark?: InputMaybe<Order_By>;
  /** 商品总金额 */
  total_amount?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_users?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Orders_Min_Fields = {
  __typename?: 'orders_min_fields';
  /** 异常信息备注（异常原因、处理方式等） */
  abnormal_remark?: Maybe<Scalars['String']['output']>;
  /** 实际支付金额 */
  actual_amount?: Maybe<Scalars['numeric']['output']>;
  /** 管理员备注 */
  admin_remark?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 优惠金额（优惠券、满减等） */
  discount_amount?: Maybe<Scalars['numeric']['output']>;
  /** 运费 */
  freight_amount?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** -- 状态值：   -- pending: 等待确认（管理员没有确认，用户可能上传了打款截图，也可能没有）   -- confirmed: 已确认（管理员完成确认了，此时会锁库存）   -- cancelled: 已取消/失效（管理员拒绝了或者用户没有付款自动取消）   -- completed: 已完成（订单完成结束） */
  order_status?: Maybe<Scalars['String']['output']>;
  /** -- 支付审核状态：   -- pending: 待支付（用户尚未上传打款凭证）   -- submitted: 已提交（用户已上传打款凭证，等待审核）   -- approved: 审核通过（管理员审核通过，确认收到打款）   -- rejected: 审核拒绝（管理员审核拒绝，需要用户重新提交） */
  payment_status?: Maybe<Scalars['String']['output']>;
  /** 支付凭证图片URL（打款截图） */
  payment_voucher_url?: Maybe<Scalars['String']['output']>;
  /** 订单备注（用户留言） */
  remark?: Maybe<Scalars['String']['output']>;
  /** 商品总金额 */
  total_amount?: Maybe<Scalars['numeric']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_users?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "orders" */
export type Orders_Min_Order_By = {
  /** 异常信息备注（异常原因、处理方式等） */
  abnormal_remark?: InputMaybe<Order_By>;
  /** 实际支付金额 */
  actual_amount?: InputMaybe<Order_By>;
  /** 管理员备注 */
  admin_remark?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  /** 优惠金额（优惠券、满减等） */
  discount_amount?: InputMaybe<Order_By>;
  /** 运费 */
  freight_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** -- 状态值：   -- pending: 等待确认（管理员没有确认，用户可能上传了打款截图，也可能没有）   -- confirmed: 已确认（管理员完成确认了，此时会锁库存）   -- cancelled: 已取消/失效（管理员拒绝了或者用户没有付款自动取消）   -- completed: 已完成（订单完成结束） */
  order_status?: InputMaybe<Order_By>;
  /** -- 支付审核状态：   -- pending: 待支付（用户尚未上传打款凭证）   -- submitted: 已提交（用户已上传打款凭证，等待审核）   -- approved: 审核通过（管理员审核通过，确认收到打款）   -- rejected: 审核拒绝（管理员审核拒绝，需要用户重新提交） */
  payment_status?: InputMaybe<Order_By>;
  /** 支付凭证图片URL（打款截图） */
  payment_voucher_url?: InputMaybe<Order_By>;
  /** 订单备注（用户留言） */
  remark?: InputMaybe<Order_By>;
  /** 商品总金额 */
  total_amount?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_users?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "orders" */
export type Orders_Mutation_Response = {
  __typename?: 'orders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Orders>;
};

/** input type for inserting object relation for remote table "orders" */
export type Orders_Obj_Rel_Insert_Input = {
  data: Orders_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};

/** on_conflict condition type for table "orders" */
export type Orders_On_Conflict = {
  constraint: Orders_Constraint;
  update_columns?: Array<Orders_Update_Column>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** Ordering options when selecting data from "orders". */
export type Orders_Order_By = {
  abnormal_remark?: InputMaybe<Order_By>;
  actual_amount?: InputMaybe<Order_By>;
  admin_remark?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  delivery_address?: InputMaybe<Order_By>;
  discount_amount?: InputMaybe<Order_By>;
  freight_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_abnormal?: InputMaybe<Order_By>;
  is_deleted?: InputMaybe<Order_By>;
  order_delivery_media_files_aggregate?: InputMaybe<Order_Delivery_Media_Files_Aggregate_Order_By>;
  order_products_aggregate?: InputMaybe<Order_Products_Aggregate_Order_By>;
  order_status?: InputMaybe<Order_By>;
  payment_status?: InputMaybe<Order_By>;
  payment_voucher_url?: InputMaybe<Order_By>;
  remark?: InputMaybe<Order_By>;
  total_amount?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_users?: InputMaybe<Order_By>;
};

/** primary key columns input for table: orders */
export type Orders_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Orders_Prepend_Input = {
  /** -- 格式示例：   -- {   --   "receiver_name": "张三",   --   "receiver_phone": "13800138000",   --   "province": "广东省",   --   "city": "深圳市",   --   "district": "南山区",   --   "detail_address": "科技园南路100号",   --   "postal_code": "518000"   -- } */
  delivery_address?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "orders" */
export enum Orders_Select_Column {
  /** column name */
  AbnormalRemark = 'abnormal_remark',
  /** column name */
  ActualAmount = 'actual_amount',
  /** column name */
  AdminRemark = 'admin_remark',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeliveryAddress = 'delivery_address',
  /** column name */
  DiscountAmount = 'discount_amount',
  /** column name */
  FreightAmount = 'freight_amount',
  /** column name */
  Id = 'id',
  /** column name */
  IsAbnormal = 'is_abnormal',
  /** column name */
  IsDeleted = 'is_deleted',
  /** column name */
  OrderStatus = 'order_status',
  /** column name */
  PaymentStatus = 'payment_status',
  /** column name */
  PaymentVoucherUrl = 'payment_voucher_url',
  /** column name */
  Remark = 'remark',
  /** column name */
  TotalAmount = 'total_amount',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserUsers = 'user_users'
}

/** select "orders_aggregate_bool_exp_bool_and_arguments_columns" columns of table "orders" */
export enum Orders_Select_Column_Orders_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsAbnormal = 'is_abnormal',
  /** column name */
  IsDeleted = 'is_deleted'
}

/** select "orders_aggregate_bool_exp_bool_or_arguments_columns" columns of table "orders" */
export enum Orders_Select_Column_Orders_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsAbnormal = 'is_abnormal',
  /** column name */
  IsDeleted = 'is_deleted'
}

/** input type for updating data in table "orders" */
export type Orders_Set_Input = {
  /** 异常信息备注（异常原因、处理方式等） */
  abnormal_remark?: InputMaybe<Scalars['String']['input']>;
  /** 实际支付金额 */
  actual_amount?: InputMaybe<Scalars['numeric']['input']>;
  /** 管理员备注 */
  admin_remark?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** -- 格式示例：   -- {   --   "receiver_name": "张三",   --   "receiver_phone": "13800138000",   --   "province": "广东省",   --   "city": "深圳市",   --   "district": "南山区",   --   "detail_address": "科技园南路100号",   --   "postal_code": "518000"   -- } */
  delivery_address?: InputMaybe<Scalars['jsonb']['input']>;
  /** 优惠金额（优惠券、满减等） */
  discount_amount?: InputMaybe<Scalars['numeric']['input']>;
  /** 运费 */
  freight_amount?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 是否存在异常 */
  is_abnormal?: InputMaybe<Scalars['Boolean']['input']>;
  /** 软删除标记 */
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  /** -- 状态值：   -- pending: 等待确认（管理员没有确认，用户可能上传了打款截图，也可能没有）   -- confirmed: 已确认（管理员完成确认了，此时会锁库存）   -- cancelled: 已取消/失效（管理员拒绝了或者用户没有付款自动取消）   -- completed: 已完成（订单完成结束） */
  order_status?: InputMaybe<Scalars['String']['input']>;
  /** -- 支付审核状态：   -- pending: 待支付（用户尚未上传打款凭证）   -- submitted: 已提交（用户已上传打款凭证，等待审核）   -- approved: 审核通过（管理员审核通过，确认收到打款）   -- rejected: 审核拒绝（管理员审核拒绝，需要用户重新提交） */
  payment_status?: InputMaybe<Scalars['String']['input']>;
  /** 支付凭证图片URL（打款截图） */
  payment_voucher_url?: InputMaybe<Scalars['String']['input']>;
  /** 订单备注（用户留言） */
  remark?: InputMaybe<Scalars['String']['input']>;
  /** 商品总金额 */
  total_amount?: InputMaybe<Scalars['numeric']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_users?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Orders_Stddev_Fields = {
  __typename?: 'orders_stddev_fields';
  /** 实际支付金额 */
  actual_amount?: Maybe<Scalars['Float']['output']>;
  /** 优惠金额（优惠券、满减等） */
  discount_amount?: Maybe<Scalars['Float']['output']>;
  /** 运费 */
  freight_amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 商品总金额 */
  total_amount?: Maybe<Scalars['Float']['output']>;
  user_users?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "orders" */
export type Orders_Stddev_Order_By = {
  /** 实际支付金额 */
  actual_amount?: InputMaybe<Order_By>;
  /** 优惠金额（优惠券、满减等） */
  discount_amount?: InputMaybe<Order_By>;
  /** 运费 */
  freight_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 商品总金额 */
  total_amount?: InputMaybe<Order_By>;
  user_users?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Orders_Stddev_Pop_Fields = {
  __typename?: 'orders_stddev_pop_fields';
  /** 实际支付金额 */
  actual_amount?: Maybe<Scalars['Float']['output']>;
  /** 优惠金额（优惠券、满减等） */
  discount_amount?: Maybe<Scalars['Float']['output']>;
  /** 运费 */
  freight_amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 商品总金额 */
  total_amount?: Maybe<Scalars['Float']['output']>;
  user_users?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "orders" */
export type Orders_Stddev_Pop_Order_By = {
  /** 实际支付金额 */
  actual_amount?: InputMaybe<Order_By>;
  /** 优惠金额（优惠券、满减等） */
  discount_amount?: InputMaybe<Order_By>;
  /** 运费 */
  freight_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 商品总金额 */
  total_amount?: InputMaybe<Order_By>;
  user_users?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Orders_Stddev_Samp_Fields = {
  __typename?: 'orders_stddev_samp_fields';
  /** 实际支付金额 */
  actual_amount?: Maybe<Scalars['Float']['output']>;
  /** 优惠金额（优惠券、满减等） */
  discount_amount?: Maybe<Scalars['Float']['output']>;
  /** 运费 */
  freight_amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 商品总金额 */
  total_amount?: Maybe<Scalars['Float']['output']>;
  user_users?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "orders" */
export type Orders_Stddev_Samp_Order_By = {
  /** 实际支付金额 */
  actual_amount?: InputMaybe<Order_By>;
  /** 优惠金额（优惠券、满减等） */
  discount_amount?: InputMaybe<Order_By>;
  /** 运费 */
  freight_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 商品总金额 */
  total_amount?: InputMaybe<Order_By>;
  user_users?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "orders" */
export type Orders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Orders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Orders_Stream_Cursor_Value_Input = {
  /** 异常信息备注（异常原因、处理方式等） */
  abnormal_remark?: InputMaybe<Scalars['String']['input']>;
  /** 实际支付金额 */
  actual_amount?: InputMaybe<Scalars['numeric']['input']>;
  /** 管理员备注 */
  admin_remark?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** -- 格式示例：   -- {   --   "receiver_name": "张三",   --   "receiver_phone": "13800138000",   --   "province": "广东省",   --   "city": "深圳市",   --   "district": "南山区",   --   "detail_address": "科技园南路100号",   --   "postal_code": "518000"   -- } */
  delivery_address?: InputMaybe<Scalars['jsonb']['input']>;
  /** 优惠金额（优惠券、满减等） */
  discount_amount?: InputMaybe<Scalars['numeric']['input']>;
  /** 运费 */
  freight_amount?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 是否存在异常 */
  is_abnormal?: InputMaybe<Scalars['Boolean']['input']>;
  /** 软删除标记 */
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  /** -- 状态值：   -- pending: 等待确认（管理员没有确认，用户可能上传了打款截图，也可能没有）   -- confirmed: 已确认（管理员完成确认了，此时会锁库存）   -- cancelled: 已取消/失效（管理员拒绝了或者用户没有付款自动取消）   -- completed: 已完成（订单完成结束） */
  order_status?: InputMaybe<Scalars['String']['input']>;
  /** -- 支付审核状态：   -- pending: 待支付（用户尚未上传打款凭证）   -- submitted: 已提交（用户已上传打款凭证，等待审核）   -- approved: 审核通过（管理员审核通过，确认收到打款）   -- rejected: 审核拒绝（管理员审核拒绝，需要用户重新提交） */
  payment_status?: InputMaybe<Scalars['String']['input']>;
  /** 支付凭证图片URL（打款截图） */
  payment_voucher_url?: InputMaybe<Scalars['String']['input']>;
  /** 订单备注（用户留言） */
  remark?: InputMaybe<Scalars['String']['input']>;
  /** 商品总金额 */
  total_amount?: InputMaybe<Scalars['numeric']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_users?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Orders_Sum_Fields = {
  __typename?: 'orders_sum_fields';
  /** 实际支付金额 */
  actual_amount?: Maybe<Scalars['numeric']['output']>;
  /** 优惠金额（优惠券、满减等） */
  discount_amount?: Maybe<Scalars['numeric']['output']>;
  /** 运费 */
  freight_amount?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 商品总金额 */
  total_amount?: Maybe<Scalars['numeric']['output']>;
  user_users?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "orders" */
export type Orders_Sum_Order_By = {
  /** 实际支付金额 */
  actual_amount?: InputMaybe<Order_By>;
  /** 优惠金额（优惠券、满减等） */
  discount_amount?: InputMaybe<Order_By>;
  /** 运费 */
  freight_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 商品总金额 */
  total_amount?: InputMaybe<Order_By>;
  user_users?: InputMaybe<Order_By>;
};

/** update columns of table "orders" */
export enum Orders_Update_Column {
  /** column name */
  AbnormalRemark = 'abnormal_remark',
  /** column name */
  ActualAmount = 'actual_amount',
  /** column name */
  AdminRemark = 'admin_remark',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeliveryAddress = 'delivery_address',
  /** column name */
  DiscountAmount = 'discount_amount',
  /** column name */
  FreightAmount = 'freight_amount',
  /** column name */
  Id = 'id',
  /** column name */
  IsAbnormal = 'is_abnormal',
  /** column name */
  IsDeleted = 'is_deleted',
  /** column name */
  OrderStatus = 'order_status',
  /** column name */
  PaymentStatus = 'payment_status',
  /** column name */
  PaymentVoucherUrl = 'payment_voucher_url',
  /** column name */
  Remark = 'remark',
  /** column name */
  TotalAmount = 'total_amount',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserUsers = 'user_users'
}

export type Orders_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Orders_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Orders_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Orders_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Orders_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Orders_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Orders_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Orders_Set_Input>;
  /** filter the rows which have to be updated */
  where: Orders_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Orders_Var_Pop_Fields = {
  __typename?: 'orders_var_pop_fields';
  /** 实际支付金额 */
  actual_amount?: Maybe<Scalars['Float']['output']>;
  /** 优惠金额（优惠券、满减等） */
  discount_amount?: Maybe<Scalars['Float']['output']>;
  /** 运费 */
  freight_amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 商品总金额 */
  total_amount?: Maybe<Scalars['Float']['output']>;
  user_users?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "orders" */
export type Orders_Var_Pop_Order_By = {
  /** 实际支付金额 */
  actual_amount?: InputMaybe<Order_By>;
  /** 优惠金额（优惠券、满减等） */
  discount_amount?: InputMaybe<Order_By>;
  /** 运费 */
  freight_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 商品总金额 */
  total_amount?: InputMaybe<Order_By>;
  user_users?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Orders_Var_Samp_Fields = {
  __typename?: 'orders_var_samp_fields';
  /** 实际支付金额 */
  actual_amount?: Maybe<Scalars['Float']['output']>;
  /** 优惠金额（优惠券、满减等） */
  discount_amount?: Maybe<Scalars['Float']['output']>;
  /** 运费 */
  freight_amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 商品总金额 */
  total_amount?: Maybe<Scalars['Float']['output']>;
  user_users?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "orders" */
export type Orders_Var_Samp_Order_By = {
  /** 实际支付金额 */
  actual_amount?: InputMaybe<Order_By>;
  /** 优惠金额（优惠券、满减等） */
  discount_amount?: InputMaybe<Order_By>;
  /** 运费 */
  freight_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 商品总金额 */
  total_amount?: InputMaybe<Order_By>;
  user_users?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Orders_Variance_Fields = {
  __typename?: 'orders_variance_fields';
  /** 实际支付金额 */
  actual_amount?: Maybe<Scalars['Float']['output']>;
  /** 优惠金额（优惠券、满减等） */
  discount_amount?: Maybe<Scalars['Float']['output']>;
  /** 运费 */
  freight_amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 商品总金额 */
  total_amount?: Maybe<Scalars['Float']['output']>;
  user_users?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "orders" */
export type Orders_Variance_Order_By = {
  /** 实际支付金额 */
  actual_amount?: InputMaybe<Order_By>;
  /** 优惠金额（优惠券、满减等） */
  discount_amount?: InputMaybe<Order_By>;
  /** 运费 */
  freight_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 商品总金额 */
  total_amount?: InputMaybe<Order_By>;
  user_users?: InputMaybe<Order_By>;
};

/** 产地表 */
export type Origins = {
  __typename?: 'origins';
  /** 分类名称，如 国内、进口 */
  category_name?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['Int']['output'];
  /** 产地名称 */
  name: Scalars['String']['output'];
  /** An array relationship */
  products: Array<Products>;
  /** An aggregate relationship */
  products_aggregate: Products_Aggregate;
  updated_at: Scalars['timestamptz']['output'];
};


/** 产地表 */
export type OriginsProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


/** 产地表 */
export type OriginsProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};

/** aggregated selection of "origins" */
export type Origins_Aggregate = {
  __typename?: 'origins_aggregate';
  aggregate?: Maybe<Origins_Aggregate_Fields>;
  nodes: Array<Origins>;
};

/** aggregate fields of "origins" */
export type Origins_Aggregate_Fields = {
  __typename?: 'origins_aggregate_fields';
  avg?: Maybe<Origins_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Origins_Max_Fields>;
  min?: Maybe<Origins_Min_Fields>;
  stddev?: Maybe<Origins_Stddev_Fields>;
  stddev_pop?: Maybe<Origins_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Origins_Stddev_Samp_Fields>;
  sum?: Maybe<Origins_Sum_Fields>;
  var_pop?: Maybe<Origins_Var_Pop_Fields>;
  var_samp?: Maybe<Origins_Var_Samp_Fields>;
  variance?: Maybe<Origins_Variance_Fields>;
};


/** aggregate fields of "origins" */
export type Origins_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Origins_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Origins_Avg_Fields = {
  __typename?: 'origins_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "origins". All fields are combined with a logical 'AND'. */
export type Origins_Bool_Exp = {
  _and?: InputMaybe<Array<Origins_Bool_Exp>>;
  _not?: InputMaybe<Origins_Bool_Exp>;
  _or?: InputMaybe<Array<Origins_Bool_Exp>>;
  category_name?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  products?: InputMaybe<Products_Bool_Exp>;
  products_aggregate?: InputMaybe<Products_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "origins" */
export enum Origins_Constraint {
  /** unique or primary key constraint on columns "id" */
  OriginsPkey = 'origins_pkey'
}

/** input type for incrementing numeric columns in table "origins" */
export type Origins_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "origins" */
export type Origins_Insert_Input = {
  /** 分类名称，如 国内、进口 */
  category_name?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  /** 产地名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<Products_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Origins_Max_Fields = {
  __typename?: 'origins_max_fields';
  /** 分类名称，如 国内、进口 */
  category_name?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** 产地名称 */
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Origins_Min_Fields = {
  __typename?: 'origins_min_fields';
  /** 分类名称，如 国内、进口 */
  category_name?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** 产地名称 */
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "origins" */
export type Origins_Mutation_Response = {
  __typename?: 'origins_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Origins>;
};

/** input type for inserting object relation for remote table "origins" */
export type Origins_Obj_Rel_Insert_Input = {
  data: Origins_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Origins_On_Conflict>;
};

/** on_conflict condition type for table "origins" */
export type Origins_On_Conflict = {
  constraint: Origins_Constraint;
  update_columns?: Array<Origins_Update_Column>;
  where?: InputMaybe<Origins_Bool_Exp>;
};

/** Ordering options when selecting data from "origins". */
export type Origins_Order_By = {
  category_name?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  products_aggregate?: InputMaybe<Products_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: origins */
export type Origins_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "origins" */
export enum Origins_Select_Column {
  /** column name */
  CategoryName = 'category_name',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "origins" */
export type Origins_Set_Input = {
  /** 分类名称，如 国内、进口 */
  category_name?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  /** 产地名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Origins_Stddev_Fields = {
  __typename?: 'origins_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Origins_Stddev_Pop_Fields = {
  __typename?: 'origins_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Origins_Stddev_Samp_Fields = {
  __typename?: 'origins_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "origins" */
export type Origins_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Origins_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Origins_Stream_Cursor_Value_Input = {
  /** 分类名称，如 国内、进口 */
  category_name?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  /** 产地名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Origins_Sum_Fields = {
  __typename?: 'origins_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "origins" */
export enum Origins_Update_Column {
  /** column name */
  CategoryName = 'category_name',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Origins_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Origins_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Origins_Set_Input>;
  /** filter the rows which have to be updated */
  where: Origins_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Origins_Var_Pop_Fields = {
  __typename?: 'origins_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Origins_Var_Samp_Fields = {
  __typename?: 'origins_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Origins_Variance_Fields = {
  __typename?: 'origins_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** 产品表 */
export type Products = {
  __typename?: 'products';
  /** An object relationship */
  batch: Batches;
  batch_batches: Scalars['bigint']['output'];
  /** An array relationship */
  carts: Array<Carts>;
  /** An aggregate relationship */
  carts_aggregate: Carts_Aggregate;
  /** An object relationship */
  category?: Maybe<Categories>;
  category_categories?: Maybe<Scalars['bigint']['output']>;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['bigint']['output'];
  /** 产品图片地址 */
  image_url?: Maybe<Scalars['String']['output']>;
  /** 产品名称 */
  name: Scalars['String']['output'];
  /** An array relationship */
  order_products: Array<Order_Products>;
  /** An aggregate relationship */
  order_products_aggregate: Order_Products_Aggregate;
  /** An object relationship */
  origin?: Maybe<Origins>;
  origin_origins?: Maybe<Scalars['bigint']['output']>;
  /** 销量 */
  sales: Scalars['bigint']['output'];
  /** 单位 */
  unit?: Maybe<Scalars['String']['output']>;
  /** 单价 */
  unit_price?: Maybe<Scalars['numeric']['output']>;
  /** 单位库存，售卖单位的库存 */
  unit_stock?: Maybe<Scalars['bigint']['output']>;
  updated_at: Scalars['timestamptz']['output'];
};


/** 产品表 */
export type ProductsCartsArgs = {
  distinct_on?: InputMaybe<Array<Carts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Carts_Order_By>>;
  where?: InputMaybe<Carts_Bool_Exp>;
};


/** 产品表 */
export type ProductsCarts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Carts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Carts_Order_By>>;
  where?: InputMaybe<Carts_Bool_Exp>;
};


/** 产品表 */
export type ProductsOrder_ProductsArgs = {
  distinct_on?: InputMaybe<Array<Order_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Products_Order_By>>;
  where?: InputMaybe<Order_Products_Bool_Exp>;
};


/** 产品表 */
export type ProductsOrder_Products_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Products_Order_By>>;
  where?: InputMaybe<Order_Products_Bool_Exp>;
};

/** aggregated selection of "products" */
export type Products_Aggregate = {
  __typename?: 'products_aggregate';
  aggregate?: Maybe<Products_Aggregate_Fields>;
  nodes: Array<Products>;
};

export type Products_Aggregate_Bool_Exp = {
  count?: InputMaybe<Products_Aggregate_Bool_Exp_Count>;
};

export type Products_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Products_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Products_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "products" */
export type Products_Aggregate_Fields = {
  __typename?: 'products_aggregate_fields';
  avg?: Maybe<Products_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Products_Max_Fields>;
  min?: Maybe<Products_Min_Fields>;
  stddev?: Maybe<Products_Stddev_Fields>;
  stddev_pop?: Maybe<Products_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Products_Stddev_Samp_Fields>;
  sum?: Maybe<Products_Sum_Fields>;
  var_pop?: Maybe<Products_Var_Pop_Fields>;
  var_samp?: Maybe<Products_Var_Samp_Fields>;
  variance?: Maybe<Products_Variance_Fields>;
};


/** aggregate fields of "products" */
export type Products_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Products_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "products" */
export type Products_Aggregate_Order_By = {
  avg?: InputMaybe<Products_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Products_Max_Order_By>;
  min?: InputMaybe<Products_Min_Order_By>;
  stddev?: InputMaybe<Products_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Products_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Products_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Products_Sum_Order_By>;
  var_pop?: InputMaybe<Products_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Products_Var_Samp_Order_By>;
  variance?: InputMaybe<Products_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "products" */
export type Products_Arr_Rel_Insert_Input = {
  data: Array<Products_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Products_On_Conflict>;
};

/** aggregate avg on columns */
export type Products_Avg_Fields = {
  __typename?: 'products_avg_fields';
  batch_batches?: Maybe<Scalars['Float']['output']>;
  category_categories?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  origin_origins?: Maybe<Scalars['Float']['output']>;
  /** 销量 */
  sales?: Maybe<Scalars['Float']['output']>;
  /** 单价 */
  unit_price?: Maybe<Scalars['Float']['output']>;
  /** 单位库存，售卖单位的库存 */
  unit_stock?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "products" */
export type Products_Avg_Order_By = {
  batch_batches?: InputMaybe<Order_By>;
  category_categories?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  origin_origins?: InputMaybe<Order_By>;
  /** 销量 */
  sales?: InputMaybe<Order_By>;
  /** 单价 */
  unit_price?: InputMaybe<Order_By>;
  /** 单位库存，售卖单位的库存 */
  unit_stock?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "products". All fields are combined with a logical 'AND'. */
export type Products_Bool_Exp = {
  _and?: InputMaybe<Array<Products_Bool_Exp>>;
  _not?: InputMaybe<Products_Bool_Exp>;
  _or?: InputMaybe<Array<Products_Bool_Exp>>;
  batch?: InputMaybe<Batches_Bool_Exp>;
  batch_batches?: InputMaybe<Bigint_Comparison_Exp>;
  carts?: InputMaybe<Carts_Bool_Exp>;
  carts_aggregate?: InputMaybe<Carts_Aggregate_Bool_Exp>;
  category?: InputMaybe<Categories_Bool_Exp>;
  category_categories?: InputMaybe<Bigint_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  image_url?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  order_products?: InputMaybe<Order_Products_Bool_Exp>;
  order_products_aggregate?: InputMaybe<Order_Products_Aggregate_Bool_Exp>;
  origin?: InputMaybe<Origins_Bool_Exp>;
  origin_origins?: InputMaybe<Bigint_Comparison_Exp>;
  sales?: InputMaybe<Bigint_Comparison_Exp>;
  unit?: InputMaybe<String_Comparison_Exp>;
  unit_price?: InputMaybe<Numeric_Comparison_Exp>;
  unit_stock?: InputMaybe<Bigint_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "products" */
export enum Products_Constraint {
  /** unique or primary key constraint on columns "batch_batches" */
  ProductsBatchBatchesKey = 'products_batch_batches_key',
  /** unique or primary key constraint on columns "id" */
  ProductsPkey = 'products_pkey'
}

/** input type for incrementing numeric columns in table "products" */
export type Products_Inc_Input = {
  batch_batches?: InputMaybe<Scalars['bigint']['input']>;
  category_categories?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  origin_origins?: InputMaybe<Scalars['bigint']['input']>;
  /** 销量 */
  sales?: InputMaybe<Scalars['bigint']['input']>;
  /** 单价 */
  unit_price?: InputMaybe<Scalars['numeric']['input']>;
  /** 单位库存，售卖单位的库存 */
  unit_stock?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "products" */
export type Products_Insert_Input = {
  batch?: InputMaybe<Batches_Obj_Rel_Insert_Input>;
  batch_batches?: InputMaybe<Scalars['bigint']['input']>;
  carts?: InputMaybe<Carts_Arr_Rel_Insert_Input>;
  category?: InputMaybe<Categories_Obj_Rel_Insert_Input>;
  category_categories?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 产品图片地址 */
  image_url?: InputMaybe<Scalars['String']['input']>;
  /** 产品名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  order_products?: InputMaybe<Order_Products_Arr_Rel_Insert_Input>;
  origin?: InputMaybe<Origins_Obj_Rel_Insert_Input>;
  origin_origins?: InputMaybe<Scalars['bigint']['input']>;
  /** 销量 */
  sales?: InputMaybe<Scalars['bigint']['input']>;
  /** 单位 */
  unit?: InputMaybe<Scalars['String']['input']>;
  /** 单价 */
  unit_price?: InputMaybe<Scalars['numeric']['input']>;
  /** 单位库存，售卖单位的库存 */
  unit_stock?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Products_Max_Fields = {
  __typename?: 'products_max_fields';
  batch_batches?: Maybe<Scalars['bigint']['output']>;
  category_categories?: Maybe<Scalars['bigint']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 产品图片地址 */
  image_url?: Maybe<Scalars['String']['output']>;
  /** 产品名称 */
  name?: Maybe<Scalars['String']['output']>;
  origin_origins?: Maybe<Scalars['bigint']['output']>;
  /** 销量 */
  sales?: Maybe<Scalars['bigint']['output']>;
  /** 单位 */
  unit?: Maybe<Scalars['String']['output']>;
  /** 单价 */
  unit_price?: Maybe<Scalars['numeric']['output']>;
  /** 单位库存，售卖单位的库存 */
  unit_stock?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "products" */
export type Products_Max_Order_By = {
  batch_batches?: InputMaybe<Order_By>;
  category_categories?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 产品图片地址 */
  image_url?: InputMaybe<Order_By>;
  /** 产品名称 */
  name?: InputMaybe<Order_By>;
  origin_origins?: InputMaybe<Order_By>;
  /** 销量 */
  sales?: InputMaybe<Order_By>;
  /** 单位 */
  unit?: InputMaybe<Order_By>;
  /** 单价 */
  unit_price?: InputMaybe<Order_By>;
  /** 单位库存，售卖单位的库存 */
  unit_stock?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Products_Min_Fields = {
  __typename?: 'products_min_fields';
  batch_batches?: Maybe<Scalars['bigint']['output']>;
  category_categories?: Maybe<Scalars['bigint']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 产品图片地址 */
  image_url?: Maybe<Scalars['String']['output']>;
  /** 产品名称 */
  name?: Maybe<Scalars['String']['output']>;
  origin_origins?: Maybe<Scalars['bigint']['output']>;
  /** 销量 */
  sales?: Maybe<Scalars['bigint']['output']>;
  /** 单位 */
  unit?: Maybe<Scalars['String']['output']>;
  /** 单价 */
  unit_price?: Maybe<Scalars['numeric']['output']>;
  /** 单位库存，售卖单位的库存 */
  unit_stock?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "products" */
export type Products_Min_Order_By = {
  batch_batches?: InputMaybe<Order_By>;
  category_categories?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 产品图片地址 */
  image_url?: InputMaybe<Order_By>;
  /** 产品名称 */
  name?: InputMaybe<Order_By>;
  origin_origins?: InputMaybe<Order_By>;
  /** 销量 */
  sales?: InputMaybe<Order_By>;
  /** 单位 */
  unit?: InputMaybe<Order_By>;
  /** 单价 */
  unit_price?: InputMaybe<Order_By>;
  /** 单位库存，售卖单位的库存 */
  unit_stock?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "products" */
export type Products_Mutation_Response = {
  __typename?: 'products_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Products>;
};

/** input type for inserting object relation for remote table "products" */
export type Products_Obj_Rel_Insert_Input = {
  data: Products_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Products_On_Conflict>;
};

/** on_conflict condition type for table "products" */
export type Products_On_Conflict = {
  constraint: Products_Constraint;
  update_columns?: Array<Products_Update_Column>;
  where?: InputMaybe<Products_Bool_Exp>;
};

/** Ordering options when selecting data from "products". */
export type Products_Order_By = {
  batch?: InputMaybe<Batches_Order_By>;
  batch_batches?: InputMaybe<Order_By>;
  carts_aggregate?: InputMaybe<Carts_Aggregate_Order_By>;
  category?: InputMaybe<Categories_Order_By>;
  category_categories?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  order_products_aggregate?: InputMaybe<Order_Products_Aggregate_Order_By>;
  origin?: InputMaybe<Origins_Order_By>;
  origin_origins?: InputMaybe<Order_By>;
  sales?: InputMaybe<Order_By>;
  unit?: InputMaybe<Order_By>;
  unit_price?: InputMaybe<Order_By>;
  unit_stock?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: products */
export type Products_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "products" */
export enum Products_Select_Column {
  /** column name */
  BatchBatches = 'batch_batches',
  /** column name */
  CategoryCategories = 'category_categories',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Name = 'name',
  /** column name */
  OriginOrigins = 'origin_origins',
  /** column name */
  Sales = 'sales',
  /** column name */
  Unit = 'unit',
  /** column name */
  UnitPrice = 'unit_price',
  /** column name */
  UnitStock = 'unit_stock',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "products" */
export type Products_Set_Input = {
  batch_batches?: InputMaybe<Scalars['bigint']['input']>;
  category_categories?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 产品图片地址 */
  image_url?: InputMaybe<Scalars['String']['input']>;
  /** 产品名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  origin_origins?: InputMaybe<Scalars['bigint']['input']>;
  /** 销量 */
  sales?: InputMaybe<Scalars['bigint']['input']>;
  /** 单位 */
  unit?: InputMaybe<Scalars['String']['input']>;
  /** 单价 */
  unit_price?: InputMaybe<Scalars['numeric']['input']>;
  /** 单位库存，售卖单位的库存 */
  unit_stock?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Products_Stddev_Fields = {
  __typename?: 'products_stddev_fields';
  batch_batches?: Maybe<Scalars['Float']['output']>;
  category_categories?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  origin_origins?: Maybe<Scalars['Float']['output']>;
  /** 销量 */
  sales?: Maybe<Scalars['Float']['output']>;
  /** 单价 */
  unit_price?: Maybe<Scalars['Float']['output']>;
  /** 单位库存，售卖单位的库存 */
  unit_stock?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "products" */
export type Products_Stddev_Order_By = {
  batch_batches?: InputMaybe<Order_By>;
  category_categories?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  origin_origins?: InputMaybe<Order_By>;
  /** 销量 */
  sales?: InputMaybe<Order_By>;
  /** 单价 */
  unit_price?: InputMaybe<Order_By>;
  /** 单位库存，售卖单位的库存 */
  unit_stock?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Products_Stddev_Pop_Fields = {
  __typename?: 'products_stddev_pop_fields';
  batch_batches?: Maybe<Scalars['Float']['output']>;
  category_categories?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  origin_origins?: Maybe<Scalars['Float']['output']>;
  /** 销量 */
  sales?: Maybe<Scalars['Float']['output']>;
  /** 单价 */
  unit_price?: Maybe<Scalars['Float']['output']>;
  /** 单位库存，售卖单位的库存 */
  unit_stock?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "products" */
export type Products_Stddev_Pop_Order_By = {
  batch_batches?: InputMaybe<Order_By>;
  category_categories?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  origin_origins?: InputMaybe<Order_By>;
  /** 销量 */
  sales?: InputMaybe<Order_By>;
  /** 单价 */
  unit_price?: InputMaybe<Order_By>;
  /** 单位库存，售卖单位的库存 */
  unit_stock?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Products_Stddev_Samp_Fields = {
  __typename?: 'products_stddev_samp_fields';
  batch_batches?: Maybe<Scalars['Float']['output']>;
  category_categories?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  origin_origins?: Maybe<Scalars['Float']['output']>;
  /** 销量 */
  sales?: Maybe<Scalars['Float']['output']>;
  /** 单价 */
  unit_price?: Maybe<Scalars['Float']['output']>;
  /** 单位库存，售卖单位的库存 */
  unit_stock?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "products" */
export type Products_Stddev_Samp_Order_By = {
  batch_batches?: InputMaybe<Order_By>;
  category_categories?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  origin_origins?: InputMaybe<Order_By>;
  /** 销量 */
  sales?: InputMaybe<Order_By>;
  /** 单价 */
  unit_price?: InputMaybe<Order_By>;
  /** 单位库存，售卖单位的库存 */
  unit_stock?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "products" */
export type Products_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Products_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Products_Stream_Cursor_Value_Input = {
  batch_batches?: InputMaybe<Scalars['bigint']['input']>;
  category_categories?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 产品图片地址 */
  image_url?: InputMaybe<Scalars['String']['input']>;
  /** 产品名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  origin_origins?: InputMaybe<Scalars['bigint']['input']>;
  /** 销量 */
  sales?: InputMaybe<Scalars['bigint']['input']>;
  /** 单位 */
  unit?: InputMaybe<Scalars['String']['input']>;
  /** 单价 */
  unit_price?: InputMaybe<Scalars['numeric']['input']>;
  /** 单位库存，售卖单位的库存 */
  unit_stock?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Products_Sum_Fields = {
  __typename?: 'products_sum_fields';
  batch_batches?: Maybe<Scalars['bigint']['output']>;
  category_categories?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  origin_origins?: Maybe<Scalars['bigint']['output']>;
  /** 销量 */
  sales?: Maybe<Scalars['bigint']['output']>;
  /** 单价 */
  unit_price?: Maybe<Scalars['numeric']['output']>;
  /** 单位库存，售卖单位的库存 */
  unit_stock?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "products" */
export type Products_Sum_Order_By = {
  batch_batches?: InputMaybe<Order_By>;
  category_categories?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  origin_origins?: InputMaybe<Order_By>;
  /** 销量 */
  sales?: InputMaybe<Order_By>;
  /** 单价 */
  unit_price?: InputMaybe<Order_By>;
  /** 单位库存，售卖单位的库存 */
  unit_stock?: InputMaybe<Order_By>;
};

/** update columns of table "products" */
export enum Products_Update_Column {
  /** column name */
  BatchBatches = 'batch_batches',
  /** column name */
  CategoryCategories = 'category_categories',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Name = 'name',
  /** column name */
  OriginOrigins = 'origin_origins',
  /** column name */
  Sales = 'sales',
  /** column name */
  Unit = 'unit',
  /** column name */
  UnitPrice = 'unit_price',
  /** column name */
  UnitStock = 'unit_stock',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Products_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Products_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Products_Set_Input>;
  /** filter the rows which have to be updated */
  where: Products_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Products_Var_Pop_Fields = {
  __typename?: 'products_var_pop_fields';
  batch_batches?: Maybe<Scalars['Float']['output']>;
  category_categories?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  origin_origins?: Maybe<Scalars['Float']['output']>;
  /** 销量 */
  sales?: Maybe<Scalars['Float']['output']>;
  /** 单价 */
  unit_price?: Maybe<Scalars['Float']['output']>;
  /** 单位库存，售卖单位的库存 */
  unit_stock?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "products" */
export type Products_Var_Pop_Order_By = {
  batch_batches?: InputMaybe<Order_By>;
  category_categories?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  origin_origins?: InputMaybe<Order_By>;
  /** 销量 */
  sales?: InputMaybe<Order_By>;
  /** 单价 */
  unit_price?: InputMaybe<Order_By>;
  /** 单位库存，售卖单位的库存 */
  unit_stock?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Products_Var_Samp_Fields = {
  __typename?: 'products_var_samp_fields';
  batch_batches?: Maybe<Scalars['Float']['output']>;
  category_categories?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  origin_origins?: Maybe<Scalars['Float']['output']>;
  /** 销量 */
  sales?: Maybe<Scalars['Float']['output']>;
  /** 单价 */
  unit_price?: Maybe<Scalars['Float']['output']>;
  /** 单位库存，售卖单位的库存 */
  unit_stock?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "products" */
export type Products_Var_Samp_Order_By = {
  batch_batches?: InputMaybe<Order_By>;
  category_categories?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  origin_origins?: InputMaybe<Order_By>;
  /** 销量 */
  sales?: InputMaybe<Order_By>;
  /** 单价 */
  unit_price?: InputMaybe<Order_By>;
  /** 单位库存，售卖单位的库存 */
  unit_stock?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Products_Variance_Fields = {
  __typename?: 'products_variance_fields';
  batch_batches?: Maybe<Scalars['Float']['output']>;
  category_categories?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  origin_origins?: Maybe<Scalars['Float']['output']>;
  /** 销量 */
  sales?: Maybe<Scalars['Float']['output']>;
  /** 单价 */
  unit_price?: Maybe<Scalars['Float']['output']>;
  /** 单位库存，售卖单位的库存 */
  unit_stock?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "products" */
export type Products_Variance_Order_By = {
  batch_batches?: InputMaybe<Order_By>;
  category_categories?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  origin_origins?: InputMaybe<Order_By>;
  /** 销量 */
  sales?: InputMaybe<Order_By>;
  /** 单价 */
  unit_price?: InputMaybe<Order_By>;
  /** 单位库存，售卖单位的库存 */
  unit_stock?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  batch_media_files: Array<Batch_Media_Files>;
  /** An aggregate relationship */
  batch_media_files_aggregate: Batch_Media_Files_Aggregate;
  /** fetch data from the table: "batch_media_files" using primary key columns */
  batch_media_files_by_pk?: Maybe<Batch_Media_Files>;
  /** An array relationship */
  batches: Array<Batches>;
  /** An aggregate relationship */
  batches_aggregate: Batches_Aggregate;
  /** fetch data from the table: "batches" using primary key columns */
  batches_by_pk?: Maybe<Batches>;
  /** An array relationship */
  carts: Array<Carts>;
  /** An aggregate relationship */
  carts_aggregate: Carts_Aggregate;
  /** fetch data from the table: "carts" using primary key columns */
  carts_by_pk?: Maybe<Carts>;
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** An array relationship */
  farmers: Array<Farmers>;
  /** An aggregate relationship */
  farmers_aggregate: Farmers_Aggregate;
  /** fetch data from the table: "farmers" using primary key columns */
  farmers_by_pk?: Maybe<Farmers>;
  /** An array relationship */
  order_delivery_media_files: Array<Order_Delivery_Media_Files>;
  /** An aggregate relationship */
  order_delivery_media_files_aggregate: Order_Delivery_Media_Files_Aggregate;
  /** fetch data from the table: "order_delivery_media_files" using primary key columns */
  order_delivery_media_files_by_pk?: Maybe<Order_Delivery_Media_Files>;
  /** An array relationship */
  order_products: Array<Order_Products>;
  /** An aggregate relationship */
  order_products_aggregate: Order_Products_Aggregate;
  /** fetch data from the table: "order_products" using primary key columns */
  order_products_by_pk?: Maybe<Order_Products>;
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table: "origins" */
  origins: Array<Origins>;
  /** fetch aggregated fields from the table: "origins" */
  origins_aggregate: Origins_Aggregate;
  /** fetch data from the table: "origins" using primary key columns */
  origins_by_pk?: Maybe<Origins>;
  /** An array relationship */
  products: Array<Products>;
  /** An aggregate relationship */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** An array relationship */
  user_roles: Array<User_Roles>;
  /** An aggregate relationship */
  user_roles_aggregate: User_Roles_Aggregate;
  /** fetch data from the table: "user_roles" using primary key columns */
  user_roles_by_pk?: Maybe<User_Roles>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootBatch_Media_FilesArgs = {
  distinct_on?: InputMaybe<Array<Batch_Media_Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Batch_Media_Files_Order_By>>;
  where?: InputMaybe<Batch_Media_Files_Bool_Exp>;
};


export type Query_RootBatch_Media_Files_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Batch_Media_Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Batch_Media_Files_Order_By>>;
  where?: InputMaybe<Batch_Media_Files_Bool_Exp>;
};


export type Query_RootBatch_Media_Files_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootBatchesArgs = {
  distinct_on?: InputMaybe<Array<Batches_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Batches_Order_By>>;
  where?: InputMaybe<Batches_Bool_Exp>;
};


export type Query_RootBatches_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Batches_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Batches_Order_By>>;
  where?: InputMaybe<Batches_Bool_Exp>;
};


export type Query_RootBatches_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootCartsArgs = {
  distinct_on?: InputMaybe<Array<Carts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Carts_Order_By>>;
  where?: InputMaybe<Carts_Bool_Exp>;
};


export type Query_RootCarts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Carts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Carts_Order_By>>;
  where?: InputMaybe<Carts_Bool_Exp>;
};


export type Query_RootCarts_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootFarmersArgs = {
  distinct_on?: InputMaybe<Array<Farmers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Farmers_Order_By>>;
  where?: InputMaybe<Farmers_Bool_Exp>;
};


export type Query_RootFarmers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Farmers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Farmers_Order_By>>;
  where?: InputMaybe<Farmers_Bool_Exp>;
};


export type Query_RootFarmers_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootOrder_Delivery_Media_FilesArgs = {
  distinct_on?: InputMaybe<Array<Order_Delivery_Media_Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Delivery_Media_Files_Order_By>>;
  where?: InputMaybe<Order_Delivery_Media_Files_Bool_Exp>;
};


export type Query_RootOrder_Delivery_Media_Files_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Delivery_Media_Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Delivery_Media_Files_Order_By>>;
  where?: InputMaybe<Order_Delivery_Media_Files_Bool_Exp>;
};


export type Query_RootOrder_Delivery_Media_Files_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootOrder_ProductsArgs = {
  distinct_on?: InputMaybe<Array<Order_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Products_Order_By>>;
  where?: InputMaybe<Order_Products_Bool_Exp>;
};


export type Query_RootOrder_Products_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Products_Order_By>>;
  where?: InputMaybe<Order_Products_Bool_Exp>;
};


export type Query_RootOrder_Products_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Query_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Query_RootOrders_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootOriginsArgs = {
  distinct_on?: InputMaybe<Array<Origins_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Origins_Order_By>>;
  where?: InputMaybe<Origins_Bool_Exp>;
};


export type Query_RootOrigins_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Origins_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Origins_Order_By>>;
  where?: InputMaybe<Origins_Bool_Exp>;
};


export type Query_RootOrigins_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Query_RootProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Query_RootProducts_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootUser_RolesArgs = {
  distinct_on?: InputMaybe<Array<User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Roles_Order_By>>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};


export type Query_RootUser_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Roles_Order_By>>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};


export type Query_RootUser_Roles_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  batch_media_files: Array<Batch_Media_Files>;
  /** An aggregate relationship */
  batch_media_files_aggregate: Batch_Media_Files_Aggregate;
  /** fetch data from the table: "batch_media_files" using primary key columns */
  batch_media_files_by_pk?: Maybe<Batch_Media_Files>;
  /** fetch data from the table in a streaming manner: "batch_media_files" */
  batch_media_files_stream: Array<Batch_Media_Files>;
  /** An array relationship */
  batches: Array<Batches>;
  /** An aggregate relationship */
  batches_aggregate: Batches_Aggregate;
  /** fetch data from the table: "batches" using primary key columns */
  batches_by_pk?: Maybe<Batches>;
  /** fetch data from the table in a streaming manner: "batches" */
  batches_stream: Array<Batches>;
  /** An array relationship */
  carts: Array<Carts>;
  /** An aggregate relationship */
  carts_aggregate: Carts_Aggregate;
  /** fetch data from the table: "carts" using primary key columns */
  carts_by_pk?: Maybe<Carts>;
  /** fetch data from the table in a streaming manner: "carts" */
  carts_stream: Array<Carts>;
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table in a streaming manner: "categories" */
  categories_stream: Array<Categories>;
  /** An array relationship */
  farmers: Array<Farmers>;
  /** An aggregate relationship */
  farmers_aggregate: Farmers_Aggregate;
  /** fetch data from the table: "farmers" using primary key columns */
  farmers_by_pk?: Maybe<Farmers>;
  /** fetch data from the table in a streaming manner: "farmers" */
  farmers_stream: Array<Farmers>;
  /** An array relationship */
  order_delivery_media_files: Array<Order_Delivery_Media_Files>;
  /** An aggregate relationship */
  order_delivery_media_files_aggregate: Order_Delivery_Media_Files_Aggregate;
  /** fetch data from the table: "order_delivery_media_files" using primary key columns */
  order_delivery_media_files_by_pk?: Maybe<Order_Delivery_Media_Files>;
  /** fetch data from the table in a streaming manner: "order_delivery_media_files" */
  order_delivery_media_files_stream: Array<Order_Delivery_Media_Files>;
  /** An array relationship */
  order_products: Array<Order_Products>;
  /** An aggregate relationship */
  order_products_aggregate: Order_Products_Aggregate;
  /** fetch data from the table: "order_products" using primary key columns */
  order_products_by_pk?: Maybe<Order_Products>;
  /** fetch data from the table in a streaming manner: "order_products" */
  order_products_stream: Array<Order_Products>;
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table in a streaming manner: "orders" */
  orders_stream: Array<Orders>;
  /** fetch data from the table: "origins" */
  origins: Array<Origins>;
  /** fetch aggregated fields from the table: "origins" */
  origins_aggregate: Origins_Aggregate;
  /** fetch data from the table: "origins" using primary key columns */
  origins_by_pk?: Maybe<Origins>;
  /** fetch data from the table in a streaming manner: "origins" */
  origins_stream: Array<Origins>;
  /** An array relationship */
  products: Array<Products>;
  /** An aggregate relationship */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** fetch data from the table in a streaming manner: "products" */
  products_stream: Array<Products>;
  /** An array relationship */
  user_roles: Array<User_Roles>;
  /** An aggregate relationship */
  user_roles_aggregate: User_Roles_Aggregate;
  /** fetch data from the table: "user_roles" using primary key columns */
  user_roles_by_pk?: Maybe<User_Roles>;
  /** fetch data from the table in a streaming manner: "user_roles" */
  user_roles_stream: Array<User_Roles>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};


export type Subscription_RootBatch_Media_FilesArgs = {
  distinct_on?: InputMaybe<Array<Batch_Media_Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Batch_Media_Files_Order_By>>;
  where?: InputMaybe<Batch_Media_Files_Bool_Exp>;
};


export type Subscription_RootBatch_Media_Files_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Batch_Media_Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Batch_Media_Files_Order_By>>;
  where?: InputMaybe<Batch_Media_Files_Bool_Exp>;
};


export type Subscription_RootBatch_Media_Files_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootBatch_Media_Files_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Batch_Media_Files_Stream_Cursor_Input>>;
  where?: InputMaybe<Batch_Media_Files_Bool_Exp>;
};


export type Subscription_RootBatchesArgs = {
  distinct_on?: InputMaybe<Array<Batches_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Batches_Order_By>>;
  where?: InputMaybe<Batches_Bool_Exp>;
};


export type Subscription_RootBatches_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Batches_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Batches_Order_By>>;
  where?: InputMaybe<Batches_Bool_Exp>;
};


export type Subscription_RootBatches_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootBatches_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Batches_Stream_Cursor_Input>>;
  where?: InputMaybe<Batches_Bool_Exp>;
};


export type Subscription_RootCartsArgs = {
  distinct_on?: InputMaybe<Array<Carts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Carts_Order_By>>;
  where?: InputMaybe<Carts_Bool_Exp>;
};


export type Subscription_RootCarts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Carts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Carts_Order_By>>;
  where?: InputMaybe<Carts_Bool_Exp>;
};


export type Subscription_RootCarts_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootCarts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Carts_Stream_Cursor_Input>>;
  where?: InputMaybe<Carts_Bool_Exp>;
};


export type Subscription_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootCategories_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Categories_Stream_Cursor_Input>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootFarmersArgs = {
  distinct_on?: InputMaybe<Array<Farmers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Farmers_Order_By>>;
  where?: InputMaybe<Farmers_Bool_Exp>;
};


export type Subscription_RootFarmers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Farmers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Farmers_Order_By>>;
  where?: InputMaybe<Farmers_Bool_Exp>;
};


export type Subscription_RootFarmers_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootFarmers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Farmers_Stream_Cursor_Input>>;
  where?: InputMaybe<Farmers_Bool_Exp>;
};


export type Subscription_RootOrder_Delivery_Media_FilesArgs = {
  distinct_on?: InputMaybe<Array<Order_Delivery_Media_Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Delivery_Media_Files_Order_By>>;
  where?: InputMaybe<Order_Delivery_Media_Files_Bool_Exp>;
};


export type Subscription_RootOrder_Delivery_Media_Files_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Delivery_Media_Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Delivery_Media_Files_Order_By>>;
  where?: InputMaybe<Order_Delivery_Media_Files_Bool_Exp>;
};


export type Subscription_RootOrder_Delivery_Media_Files_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootOrder_Delivery_Media_Files_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Order_Delivery_Media_Files_Stream_Cursor_Input>>;
  where?: InputMaybe<Order_Delivery_Media_Files_Bool_Exp>;
};


export type Subscription_RootOrder_ProductsArgs = {
  distinct_on?: InputMaybe<Array<Order_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Products_Order_By>>;
  where?: InputMaybe<Order_Products_Bool_Exp>;
};


export type Subscription_RootOrder_Products_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Products_Order_By>>;
  where?: InputMaybe<Order_Products_Bool_Exp>;
};


export type Subscription_RootOrder_Products_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootOrder_Products_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Order_Products_Stream_Cursor_Input>>;
  where?: InputMaybe<Order_Products_Bool_Exp>;
};


export type Subscription_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrders_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootOrders_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Orders_Stream_Cursor_Input>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootOriginsArgs = {
  distinct_on?: InputMaybe<Array<Origins_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Origins_Order_By>>;
  where?: InputMaybe<Origins_Bool_Exp>;
};


export type Subscription_RootOrigins_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Origins_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Origins_Order_By>>;
  where?: InputMaybe<Origins_Bool_Exp>;
};


export type Subscription_RootOrigins_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootOrigins_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Origins_Stream_Cursor_Input>>;
  where?: InputMaybe<Origins_Bool_Exp>;
};


export type Subscription_RootProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootProducts_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootProducts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Products_Stream_Cursor_Input>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootUser_RolesArgs = {
  distinct_on?: InputMaybe<Array<User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Roles_Order_By>>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};


export type Subscription_RootUser_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Roles_Order_By>>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};


export type Subscription_RootUser_Roles_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootUser_Roles_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Roles_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** 用户角色 */
export type User_Roles = {
  __typename?: 'user_roles';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['bigint']['output'];
  /** 角色类型：operator/farmer/store */
  role_type?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  user_users: Scalars['bigint']['output'];
};

/** aggregated selection of "user_roles" */
export type User_Roles_Aggregate = {
  __typename?: 'user_roles_aggregate';
  aggregate?: Maybe<User_Roles_Aggregate_Fields>;
  nodes: Array<User_Roles>;
};

export type User_Roles_Aggregate_Bool_Exp = {
  count?: InputMaybe<User_Roles_Aggregate_Bool_Exp_Count>;
};

export type User_Roles_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<User_Roles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Roles_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "user_roles" */
export type User_Roles_Aggregate_Fields = {
  __typename?: 'user_roles_aggregate_fields';
  avg?: Maybe<User_Roles_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<User_Roles_Max_Fields>;
  min?: Maybe<User_Roles_Min_Fields>;
  stddev?: Maybe<User_Roles_Stddev_Fields>;
  stddev_pop?: Maybe<User_Roles_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Roles_Stddev_Samp_Fields>;
  sum?: Maybe<User_Roles_Sum_Fields>;
  var_pop?: Maybe<User_Roles_Var_Pop_Fields>;
  var_samp?: Maybe<User_Roles_Var_Samp_Fields>;
  variance?: Maybe<User_Roles_Variance_Fields>;
};


/** aggregate fields of "user_roles" */
export type User_Roles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Roles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "user_roles" */
export type User_Roles_Aggregate_Order_By = {
  avg?: InputMaybe<User_Roles_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Roles_Max_Order_By>;
  min?: InputMaybe<User_Roles_Min_Order_By>;
  stddev?: InputMaybe<User_Roles_Stddev_Order_By>;
  stddev_pop?: InputMaybe<User_Roles_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<User_Roles_Stddev_Samp_Order_By>;
  sum?: InputMaybe<User_Roles_Sum_Order_By>;
  var_pop?: InputMaybe<User_Roles_Var_Pop_Order_By>;
  var_samp?: InputMaybe<User_Roles_Var_Samp_Order_By>;
  variance?: InputMaybe<User_Roles_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_roles" */
export type User_Roles_Arr_Rel_Insert_Input = {
  data: Array<User_Roles_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Roles_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Roles_Avg_Fields = {
  __typename?: 'user_roles_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_users?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "user_roles" */
export type User_Roles_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  user_users?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_roles". All fields are combined with a logical 'AND'. */
export type User_Roles_Bool_Exp = {
  _and?: InputMaybe<Array<User_Roles_Bool_Exp>>;
  _not?: InputMaybe<User_Roles_Bool_Exp>;
  _or?: InputMaybe<Array<User_Roles_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  role_type?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_users?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_roles" */
export enum User_Roles_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserRolesPkey = 'user_roles_pkey'
}

/** input type for incrementing numeric columns in table "user_roles" */
export type User_Roles_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  user_users?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "user_roles" */
export type User_Roles_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 角色类型：operator/farmer/store */
  role_type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_users?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type User_Roles_Max_Fields = {
  __typename?: 'user_roles_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 角色类型：operator/farmer/store */
  role_type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_users?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "user_roles" */
export type User_Roles_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 角色类型：operator/farmer/store */
  role_type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_users?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Roles_Min_Fields = {
  __typename?: 'user_roles_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 角色类型：operator/farmer/store */
  role_type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_users?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "user_roles" */
export type User_Roles_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 角色类型：operator/farmer/store */
  role_type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_users?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_roles" */
export type User_Roles_Mutation_Response = {
  __typename?: 'user_roles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Roles>;
};

/** on_conflict condition type for table "user_roles" */
export type User_Roles_On_Conflict = {
  constraint: User_Roles_Constraint;
  update_columns?: Array<User_Roles_Update_Column>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};

/** Ordering options when selecting data from "user_roles". */
export type User_Roles_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role_type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_users?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_roles */
export type User_Roles_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "user_roles" */
export enum User_Roles_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  RoleType = 'role_type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserUsers = 'user_users'
}

/** input type for updating data in table "user_roles" */
export type User_Roles_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 角色类型：operator/farmer/store */
  role_type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_users?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type User_Roles_Stddev_Fields = {
  __typename?: 'user_roles_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_users?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "user_roles" */
export type User_Roles_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  user_users?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Roles_Stddev_Pop_Fields = {
  __typename?: 'user_roles_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_users?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "user_roles" */
export type User_Roles_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  user_users?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Roles_Stddev_Samp_Fields = {
  __typename?: 'user_roles_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_users?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "user_roles" */
export type User_Roles_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  user_users?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "user_roles" */
export type User_Roles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Roles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Roles_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 角色类型：operator/farmer/store */
  role_type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_users?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type User_Roles_Sum_Fields = {
  __typename?: 'user_roles_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  user_users?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "user_roles" */
export type User_Roles_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  user_users?: InputMaybe<Order_By>;
};

/** update columns of table "user_roles" */
export enum User_Roles_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  RoleType = 'role_type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserUsers = 'user_users'
}

export type User_Roles_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Roles_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Roles_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Roles_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Roles_Var_Pop_Fields = {
  __typename?: 'user_roles_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_users?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "user_roles" */
export type User_Roles_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  user_users?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Roles_Var_Samp_Fields = {
  __typename?: 'user_roles_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_users?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "user_roles" */
export type User_Roles_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  user_users?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Roles_Variance_Fields = {
  __typename?: 'user_roles_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_users?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "user_roles" */
export type User_Roles_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  user_users?: InputMaybe<Order_By>;
};

/** 用户表 */
export type Users = {
  __typename?: 'users';
  /** 头像 */
  avatar_url?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  carts: Array<Carts>;
  /** An aggregate relationship */
  carts_aggregate: Carts_Aggregate;
  created_at: Scalars['timestamptz']['output'];
  /** An array relationship */
  farmers: Array<Farmers>;
  /** An aggregate relationship */
  farmers_aggregate: Farmers_Aggregate;
  id: Scalars['bigint']['output'];
  /** 昵称 */
  nickname?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  /** 手机号（唯一） */
  phone: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An array relationship */
  user_roles: Array<User_Roles>;
  /** An aggregate relationship */
  user_roles_aggregate: User_Roles_Aggregate;
};


/** 用户表 */
export type UsersCartsArgs = {
  distinct_on?: InputMaybe<Array<Carts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Carts_Order_By>>;
  where?: InputMaybe<Carts_Bool_Exp>;
};


/** 用户表 */
export type UsersCarts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Carts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Carts_Order_By>>;
  where?: InputMaybe<Carts_Bool_Exp>;
};


/** 用户表 */
export type UsersFarmersArgs = {
  distinct_on?: InputMaybe<Array<Farmers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Farmers_Order_By>>;
  where?: InputMaybe<Farmers_Bool_Exp>;
};


/** 用户表 */
export type UsersFarmers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Farmers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Farmers_Order_By>>;
  where?: InputMaybe<Farmers_Bool_Exp>;
};


/** 用户表 */
export type UsersOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


/** 用户表 */
export type UsersOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


/** 用户表 */
export type UsersUser_RolesArgs = {
  distinct_on?: InputMaybe<Array<User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Roles_Order_By>>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};


/** 用户表 */
export type UsersUser_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Roles_Order_By>>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  avatar_url?: InputMaybe<String_Comparison_Exp>;
  carts?: InputMaybe<Carts_Bool_Exp>;
  carts_aggregate?: InputMaybe<Carts_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  farmers?: InputMaybe<Farmers_Bool_Exp>;
  farmers_aggregate?: InputMaybe<Farmers_Aggregate_Bool_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  nickname?: InputMaybe<String_Comparison_Exp>;
  orders?: InputMaybe<Orders_Bool_Exp>;
  orders_aggregate?: InputMaybe<Orders_Aggregate_Bool_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_roles?: InputMaybe<User_Roles_Bool_Exp>;
  user_roles_aggregate?: InputMaybe<User_Roles_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "phone" */
  UsersPhoneKey = 'users_phone_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  /** 头像 */
  avatar_url?: InputMaybe<Scalars['String']['input']>;
  carts?: InputMaybe<Carts_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  farmers?: InputMaybe<Farmers_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 昵称 */
  nickname?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<Orders_Arr_Rel_Insert_Input>;
  /** 手机号（唯一） */
  phone?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_roles?: InputMaybe<User_Roles_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  /** 头像 */
  avatar_url?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 昵称 */
  nickname?: Maybe<Scalars['String']['output']>;
  /** 手机号（唯一） */
  phone?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  /** 头像 */
  avatar_url?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 昵称 */
  nickname?: Maybe<Scalars['String']['output']>;
  /** 手机号（唯一） */
  phone?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  avatar_url?: InputMaybe<Order_By>;
  carts_aggregate?: InputMaybe<Carts_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  farmers_aggregate?: InputMaybe<Farmers_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  orders_aggregate?: InputMaybe<Orders_Aggregate_Order_By>;
  phone?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_roles_aggregate?: InputMaybe<User_Roles_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  AvatarUrl = 'avatar_url',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  Phone = 'phone',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  /** 头像 */
  avatar_url?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 昵称 */
  nickname?: InputMaybe<Scalars['String']['input']>;
  /** 手机号（唯一） */
  phone?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  /** 头像 */
  avatar_url?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 昵称 */
  nickname?: InputMaybe<Scalars['String']['input']>;
  /** 手机号（唯一） */
  phone?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  AvatarUrl = 'avatar_url',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  Phone = 'phone',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Users_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Users_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};
