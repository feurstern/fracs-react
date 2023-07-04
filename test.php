<!-- Fade In Block Modal -->
<div class="modal fade" id="apl_02" tabindex="-1" role="dialog" aria-labelledby="apl_02" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
        <div class="modal-content rounded">
            <div class="block block-themed block-transparent mb-0">
                <div class="block-header bg-primary rounded">
                    <h3 class="block-title" id='md_apl_02_title'>
                        FORMULIR APL-02
                    </h3>
                    <div class="block-options">
                        <button type="button" class="btn-block-option" data-dismiss="modal" aria-label="Close">
                            <i class="fa fa-fw fa-times"></i>
                        </button>
                    </div>
                </div>
                <div class="block-body p-4" id="modal_apl02">

                    <div class="col-md-12 row">
                        <div class="col-md-8">
                            <div>
                                <img style="max-width: 125px;max-height: 125px;" src="<?=$set_logo_bnsp?>" alt="">
                            </div>
                        </div>
                        
                        <div class="col-md-2 text-center" style="display: flex !important;justify-content: center !important;align-items: center !important;">
                            <?php  if ($set_logo_induk == null) { ?>
                                <span></span>
                            <?php } else { ?>
                                <div>
                                    <img style="max-width: 125px;max-height: 125px;" src="<?=$set_logo_induk?>" alt="">
                                </div>
                            <?php } ?>
                        </div>

                        <div class="col-md-2 text-center" style="display: flex !important;justify-content: center !important;align-items: center !important;">
                            <div>
                                <img style="max-width: 125px;max-height: 125px;" src="<?=$set_logo_lsp?>" alt="">
                            </div>
                        </div>
                    </div>

                    <div class="mt-2 mb-6 d-flex flex-column align-items-center">
                        <span class="h2 mb-1 text-center">
                            FR.APL.02 Asesmen Mandiri
                        </span>
                    </div>
                    
                    <!-- onsubmit="return (validate())"  -->
                    <form 
                        id="frm_apl02" 
                        method='POST' 
                        enctype="multipart/form-data" 
                        data-flag="0"
                    >
                        <input type="hidden" name="product_id" id="product_id_apl02" value="<?=$product_id?>">
                        <input type="hidden" name="profider_id" id="profider_id_apl02" value="<?=$profider_id?>">
                        <input type="hidden" name="user_id" id="user_id_apl02" value="<?=$user_id?>">
                        <input type="hidden" name="event_id" id="event_id_apl02" value="<?=$event_id?>">
                        <input type="hidden" name="origin_id" id="origin_id_apl02" value="">
                        <input type="hidden" name="form_id" id="form_id_apl02" value="">

                        <?php 
                            //ambil persyaratan dasar yang di submit pada APL 01
                            $data_persyaratan   = [];
                            $persyaratan_dasar  = $this->db->order_by('req_name', 'ASC')->get_where('prd_cert_req', ['product_id' => $product_id, 'profider_id' => $profider_id, 'status' => 1]);
                            if($persyaratan_dasar->num_rows() == 0)
                            {
                                array_push($data_persyaratan,[
                                    'nama_persyaratan'  => 'tidak ada persyaratan dasar yang di upload'
                                    , 'bukti_path'      => NULL
                                    , 'bukti_file'      => NULL
                                ]);
                            }
                            else
                            {
                                $list_persyaratan   = $persyaratan_dasar->result_array();
                                foreach($list_persyaratan AS $lp){
                                    $nama_persyaratan   = $lp['req_name'];
                                    $req_id             = $lp['req_id'];

                                    $url_persyaratan    = 'BELUM UPLOAD';
                                    $get_persyaratan    = $this->db->order_by('ts_insert', 'DESC')->get_where('submitted_certpers_req', ['user_id' => $user_id, 'req_id' => $req_id, 'status' => 1], 1);
                                    if($get_persyaratan->num_rows() <> 0){
                                        $submited_data  = $get_persyaratan->row_array();
                                        $bukti_path     = $submited_data['file_path'];
                                        $bukti_file     = $submited_data['file_name'];
                                    }
                                    array_push($data_persyaratan, [
                                        'nama_persyaratan'  => $nama_persyaratan
                                        , 'bukti_path'      => $bukti_path
                                        , 'bukti_file'      => $bukti_file
                                    ]);
                                } 
                            }
                        ?>

                        <div class="d-flex flex-column gap-costume-4">
                            <div class="d-flex flex-column border border-secondary rounded p-2">

                                <div class="d-flex flex-column mb-4">
                                    <span class="h3 mb-0 text-muted">Skema Sertifikasi</span>
                                    <span class="h6 mb-0 font-w400">(
                                        <span class="<?= (empty($_SESSION['level_skema_sertifikasi']) || $_SESSION['level_skema_sertifikasi'] !== 'kkni') ? 'text-line-2' : '' ?>">
                                            KKNI
                                        </span>
                                        /
                                        <span class="<?= (empty($_SESSION['level_skema_sertifikasi']) || $_SESSION['level_skema_sertifikasi'] !== 'okupasi') ? 'text-line-2' : '' ?>">
                                            Okupasi
                                        </span>
                                        /
                                        <span class="<?= (empty($_SESSION['level_skema_sertifikasi']) || $_SESSION['level_skema_sertifikasi'] !== 'klaster') ? 'text-line-2' : '' ?>">
                                            Klaster
                                        </span>
                                    )</span>
                                </div>
                                
                                <div class="border border-secondary rounded p-2 mb-3 position-relative">
                                    <span class="h5 mb-0 text-muted bg-white pl-1 pr-1 title-onborder">Judul : </span>
                                    <span class="h5 font-w400 mb-0" id="product_name">
                                        
                                    </span>
                                </div>

                                <div class="border border-secondary rounded p-2 mb-3 position-relative">
                                    <span class="h5 mb-0 text-muted bg-white pl-1 pr-1 title-onborder">Nomor : </span>
                                    <span class="h5 font-w400 mb-0" id="product_number">
                                        
                                    </span>
                                </div>

                                <div class="border border-secondary rounded p-2 mb-3 position-relative">
                                    <span class="h5 mb-0 text-muted bg-white pl-1 pr-1 title-onborder">TUK : </span>
                                    <span class="h5 font-w400 mb-0" id="event_tuk">
                                        
                                    </span>
                                </div>

                                <div class="border border-secondary rounded p-2 mb-3 position-relative">
                                    <span class="h5 mb-0 text-muted bg-white pl-1 pr-1 title-onborder">Nama Asesor : </span>
                                    <span class="h5 font-w400 mb-0 nama_asesor_apl02" id="asesor_name_apl02">
                                        
                                    </span>
                                </div>

                                <div class="border border-secondary rounded p-2 mb-3 position-relative">
                                    <span class="h5 mb-0 text-muted bg-white pl-1 pr-1 title-onborder">Nama Asesi : </span>
                                    <span class="h5 font-w400 mb-0 nama_asesi_apl02" id="asesi_apl02_name">
                                        
                                    </span>
                                </div>

                                <div class="border border-secondary rounded p-2 mb-3 position-relative">
                                    <span class="h5 mb-0 text-muted bg-white pl-1 pr-1 title-onborder">Tanggal : </span>
                                    <span class="h5 font-w400 mb-0" id="start_event">
                                        
                                    </span>
                                </div>
                            </div>
    
                            <div class="border border-secondary rounded pl-2 pr-2 pt-3 pb-2 position-relative">
                                <span class="h4 mb-0 text-muted bg-white pl-1 pr-1 title-onborder">Panduan Asesmen Mandiri</span>
                                <span class="h4 mb-1 text-muted">
                                    Instruksi:
                                </span>
                                <ol class="mb-0 h5 font-w400 mb-0" style="margin-left: -1.2rem;">
                                    <li>
                                        <span>Baca setiap pertanyaan di kolom sebelah kiri</span>
                                    </li>
                                    <li>
                                        <span>Beri tanda centang (&#10004;) pada kotak jika Anda yakin dapat melakukan tugas yang dijelaskan.</span>
                                    </li>
                                    <li>
                                        <span>Isi kolom di sebelah kanan dengan mendaftar bukti yang Anda miliki untuk menunjukkan bahwa Anda melakukan tugas-tugas ini.</span>
                                    </li>
                                </ol>
                            </div>
    
                            <!-- Revisi Ricky v3 -->
                            <div id="isi_apl02">
                            
                            </div>

                            <input type="number" class="form-control d-none" id="count_signature_apl02_asesi" min="0" value="" style="display:none;" hidden>
                            <div class="d-flex flex-column rounded">
                                <div class="d-flex gap-costume-1 border w-100">
                                    <div class="w-100 border border-secondary rounded p-2 position-relative d-flex flex-column justify-content-between">
                                        
                                        <span class="h4 text-muted bg-white pl-1 pr-1">Tanda Tangan Asesi</span>
                                        
                                        <div class="mb-2">
                                            <div class="mb-1 row">
                                                <div class="col-md-3">
                                                    <span class="h4 font-w400 mb-0">Nama</span>
                                                </div>
                                                <div class="col-md-9 d-flex align-items-center" style="gap: 1rem">
                                                    :
                                                    <div class="col-md-6 p-0">
                                                        <span class="h4 text-400 mb-0 nama_asesi_apl02" id="nama_asesi_apl02">
                                                            
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mb-1 row">
                                                <div class="col-md-3">
                                                    <span class="h4 font-w400 mb-0">Tanggal</span>
                                                </div>
                                                <div class="col-md-9 d-flex align-items-center" style="gap: 1rem">
                                                    :
                                                    <div class="col-md-6 p-0">
                                                        <span class="h4 text-400 mb-0" id="tanggal_ttd_asesi_apl02">
                                                            
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="w-50 border border-secondary rounded p-2 d-flex flex-column justify-content-center align-items-center">
                                            <div class="d-flex flex-column justify-content-center align-items-center">
                                                <img 
                                                    class="d-none"
                                                    src="<?= base_url('assets/img/image-not-found.jpg') ?>"
                                                    alt="tanda tangan asesi 02"
                                                    width="100"
                                                    height="100"
                                                    id="ttd_asesi_apl02"
                                                    data-image-default="1"
                                                />

                                                <a 
                                                    href="javascript:void(0)"
                                                    class="w-100 btn btn-primary"
                                                    data-image="ttd_asesi_apl02"
                                                    data-form="asesiApl02"
                                                    onclick="openSignitureMethodV2(this, 'asesiApl02')"
                                                >
                                                    <svg width="16" height="16" fill="currentColor" class="bi bi-vector-pen" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828L10.646.646zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z"/>
                                                        <path fill-rule="evenodd" d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086.086-.026z"/>
                                                    </svg>
                                                    Click untuk tanda tangan
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-100 border border-secondary rounded p-2 position-relative d-none flex-column justify-content-between" id="asesor_part_apl02">
                                        <span class="h4 text-muted bg-white pl-1 pr-1">Ditinjau Oleh Asesor</span>
                                        
                                        <div>
                                            <div class="mb-1 row">
                                                <div class="col-md-3">
                                                    <span class="h4 font-w400 mb-0">Nama</span>
                                                </div>
                                                <div class="col-md-9 d-flex align-items-center" style="gap: 1rem">
                                                    :
                                                    <div class="col-md-6 p-0">
                                                        <span class="h4 text-400 mb-0 nama_asesor_apl02" id="nama_asesor_admin02">
                                                            -
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mb-1 row">
                                                <div class="col-md-3">
                                                    <span class="h4 font-w400 mb-0">Tanggal</span>
                                                </div>
                                                <div class="col-md-9 d-flex align-items-center" style="gap: 1rem">
                                                    :
                                                    <div class="col-md-6 p-0">
                                                        <span class="h4 text-400 mb-0" id="tanggal_ttd_asesor_apl02">
                                                            -
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="w-100 border border-secondary rounded p-2 d-flex justify-content-center">
                                            <img src="#" width="100" height="100" id="ttd_asesor_apl02">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="block-content block-content-full text-right border-top pb-0 pr-0" id="able_submit_apl02">
                                <button type="submit" class="btn btn-md btn-primary" id="btn_submit_apl02">
                                    Submit
                                </button>
                                <button type="button" class="btn btn-md btn-secondary" data-dismiss="modal">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </form>

                </div>

                <div class="block-content block-content-full text-right border-top" id="sudah_isi_apl02">
                    <button type="button" class="btn btn-md btn-primary" id="btn_print_modal_apl02">
                        <i class="fa fa-file mr-1"></i> Unduh
                    </button>
                    <button type="button" class="btn btn-md btn-secondary" data-dismiss="modal">
                        Cancel
                    </button>
                </div>
            
                <!-- <div> -->
                <div style="position: fixed;bottom: 10000px;right: 10000px;">
                    <?php $this->load->view("participant/mod/apl_02_ori");?>
                </div>

            </div>
        </div>
    </div>
</div>
<!-- END Fade In Block Modal -->

<script>
    var bukticount = 0;

    const handleRadioClickapl02 = (el, index, radioId) => {
        const iconDOM = document.querySelectorAll(`.icon-check-apl02-${index}`);
        const radioDOM = document.querySelector(`#${radioId}`);

        // Ricky v3
        var indikator = $('#'+radioId).data('indi');
        
        console.log(`indikator : ${indikator}`);
        console.log(`the value of el ${el}`);
        console.log(`tge value of radio id : ${radioId}`);
        console.log(`The radioDOM is : ${radioDOM}`);

        iconDOM.forEach(item => {
            item.classList.remove('text-seccess');
            item.classList.add('text-white');
        });
        
        

        // if( (indikator) ){
        //     if(indikator == "k"){
        //         $(".check_p_div_"+index).addClass('cursor-pointer');
        //         $(".check_p_div_"+index).removeClass('disable-pointer');
        //     }
        //     else if(indikator == "bk") {
        //         $(".check_p_div_"+index).addClass('disable-pointer');
        //         $(".check_p_div_"+index).removeClass('cursor-pointer');

        //         $(".check_div_"+index).addClass('text-white');
        //         $(".check_div_"+index).removeClass('text-success');
        //         $('.check_input_'+index).prop('checked', false);
        //     }
        // }
        
        if (radioDOM.checked) {
            el.classList.add('text-white');
            el.classList.remove('text-success');
            radioDOM.checked = false;
        }
        else {
            el.classList.remove('text-white');
            el.classList.add('text-success');
            radioDOM.checked = true;
        }

        if(radioDOM.checked){
            for (let i=0; i<radioId.length; i++){
                if(radioDOM.value== 'k'){
                    radioDOM.checked = true;
                }
                else if(radioDOM.value =="bk"){
                    radioDOM.checked = true;
                }
                else{
                    return 0;
                }
            }
        }
        else {
            return 0;
        }
    
    }
    // console.log(` Element :${jml_elemen}`);
    // Ricky v3
    $('#frm_apl02').on('submit', function(){
        var flag = $('#frm_apl02').data("flag");
        var count_check = 0;
        var count_size_over = 0;
        var count_ext_over = 0;
        var jml_chapter = 0;
        var jml_elemen = $("#loop_elemen").val();
        
        

        var count_ttd = $("#count_signature_apl02_asesi").val();

        // Revisi Ricky v5.1 26/07/22 penambahan validasi untuk kasus edit
        if(flag == '0') {
            var list_elemen_ext = '';
            var list_elemen_size = '';
            var text_swal = '';
            var count_delete_bukti = 0;

            for(let i = 1; i <= jml_elemen; i++){
                var checkbox_k = $('#radioapl02-a-'+i).prop("checked");
                var checkbox_bk = $('#radioapl02-b-'+i).prop("checked");

                if(checkbox_k == true || checkbox_bk == true){
                    count_check += 1;
                }
            }

            // console.log(jml_elemen);
            
            for(let j = 1; j <= jml_elemen; j++){
                var cur_id = $('#cur_elemen_'+j).val();
                var cur_nama = $('#nama_elemen_'+j).val();
                var cur_nama_next = $('#nama_elemen_'+(j+1)).val();
                // console.log(cur_id);
                
                var jml_bukti = $('#count_bukti_'+cur_id).val();
                // console.log(jml_bukti);
                
                for(let n = 1; n <= jml_bukti; n++){
                    var input_file = $("#file_bukti_"+cur_id+"_"+n).val();
                    var ext = input_file.substr( (input_file.lastIndexOf('.') +1) ).toLowerCase();

                    // console.log(ext);

                    var file_bukti = $("#file_bukti_"+cur_id+"_"+n)[0].files[0];

                    if((input_file)){
                        if( ext != "jpg" && ext != "png" && ext != "jpeg" && ext != "pdf"){
                            count_ext_over++;
                            list_elemen_ext += "<b>"+cur_nama+"<i> Bukti Relevan ke- "+n+"</i></b>, ";
                        }
                        else if(file_bukti.size > 2048000){
                            count_size_over++;
                            list_elemen_size += "<b>"+cur_nama+"<i> Bukti Relevan ke- "+n+"</i></b>, ";
                        }
                    }

                    // Revisi Ricky v5.1 26/07/22
                    <?php if(empty($resp_id) && !empty($data_apl02_1row)) : ?>
                        var check_delete_bukti = $("#delete_bukti_"+cur_id+"_"+n).prop('checked');
                        if(check_delete_bukti){
                            count_delete_bukti++;
                        }
                    <?php endif; ?>
                }
            }
            
            // console.log('===> count delete', count_delete_bukti);

            if(count_check < jml_elemen){
                Swal.fire({
                    title: "Submit Gagal",
                    icon: "warning",
                    text: "Anda belum menjawab semua unit kompetensi yang berada di Asesmen Mandiri"
                });

                return false;
            }
            else if(count_ext_over > 0){
                Swal.fire({
                    title: "Submit Gagal",
                    icon: "warning",
                    html: `File yang anda upload tidak sesuai dengan extensi yang diijinkan (JPG/JPEG/PNG/PDF) pada Elemen ${list_elemen_ext}Silahkan ubah terlebih dahulu!`
                });

                return false;
            }
            else if(count_size_over > 0){
                Swal.fire({
                    title: "Submit Gagal",
                    icon: "warning",
                    html: `File yang anda upload melebihi 2 MB pada Elemen ${list_elemen_size}Silahkan ubah terlebih dahulu!`
                });

                return false;
            }
            else if(count_ttd < 1){
                Swal.fire({
                    title: "Informasi",
                    icon: "warning",
                    text: "Anda belum menanda-tangani form Asesmen Mandiri, silahkan menanda-tangani form ini sebelum mengirimkan data Asesmen Mandiri"
                });    
            }
            else {
                Swal.fire({
                    title: "Konfirmasi",
                    icon: "warning",
                    text: "Apakah Anda setuju bahwa form ini terisi dengan benar dan akurat?",
                    allowEscapeKey: false,
                    allowEnterKey: false,
                    allowOutsideClick: false,
                    showConfirmButton: true,
                    showDenyButton: true,
                    showCancelButton: false,
                    confirmButtonText: "Ya",
                    denyButtonText: "Tidak"
                }).then((a) => {
                    if(a.isConfirmed) {
                        // Revisi Ricky v5.1 26/07/22
                        <?php if(empty($resp_id) && empty($data_apl02_1row)) : ?>
                            Swal.fire({
                                title: "Konfirmasi",
                                icon: "warning",
                                text: "Untuk memvalidasi, Form ini memerlukan tanda tangan dari Anda. Apakah Anda bersedia memberikan ijin kepada Ourtoga untuk menambahkan tanda tangan Anda pada form ini agar dapat melanjutkan pada proses selanjutnya?",
                                allowEscapeKey: false,
                                allowEnterKey: false,
                                allowOutsideClick: false,
                                showConfirmButton: true,
                                showDenyButton: true,
                                showCancelButton: false,
                                confirmButtonColor: "#dd6b55",
                                denyButtonColor: "#3085d6",
                                confirmButtonText: "Tidak",
                                denyButtonText: "Ya"
                            }).then((b) => {
                                if(b.isDenied) {
                                    $('#frm_apl02').data("flag", '1');
                                    $('#frm_apl02').submit();
                                }
                                else {
                                    return false;
                                }
                            });
                        <?php else : ?>
                            if(count_delete_bukti > 0 ){
                                text_swal = 'Apakah Anda yakin terhadap perubahan tersebut? <br><font style="color: firebrick;">(Sistem mendeteksi Anda akan melakukan penghapusan <b>Bukti Relevan</b>)</font>';
                            }
                            else {
                                text_swal = 'Apakah Anda yakin terhadap perubahan tersebut? ';
                            }

                            Swal.fire({
                                title: "Konfirmasi",
                                icon: "warning",
                                html: text_swal,
                                allowEscapeKey: false,
                                allowEnterKey: false,
                                allowOutsideClick: false,
                                showConfirmButton: true,
                                showDenyButton: true,
                                showCancelButton: false,
                                confirmButtonColor: "#dd6b55",
                                denyButtonColor: "#3085d6",
                                confirmButtonText: "Tidak",
                                denyButtonText: "Ya"
                            }).then((b) => {
                                if(b.isDenied) {
                                    $('#frm_apl02').data("flag", '1');
                                    $('#frm_apl02').submit();
                                }
                                else {
                                    return false;
                                }
                            });
                        <?php endif; ?>
                    }
                    else {
                        return false;
                    }
                });
            }
        }
        else {
            $('#frm_apl02').data("flag", '0');
            $('#btn_submit_apl02').addClass("disable-pointer");
            $('#btn_submit_apl02').attr("disabled", true);

            Swal.fire({
                title: "Loading",
                text: "Please Wait...",
                allowOutsideClick: false,
                allowEnterButton: false,
                allowEscapeButton: false,
                showConfirmButton: false,
                showCancelButton: false,
                showDenyButton: false,
                timer: 999999,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                }
            });

            return true;
        }

        return false;
    });
    
    // function useState(defaultValue) {
    //     let value = defaultValue

    //     function getValue() {
    //         return value
    //     }
        
    //     function setValue(newValue) {
    //         value = newValue
    //     }

    //     return [getValue, setValue];
    // }

  

     

    function add_bukti_elemen_form(cur_id)
    {
        var get_bukti = $("#count_bukti_"+cur_id).val();
        var next_bukti = (parseInt(get_bukti)+1);
        $("#count_bukti_"+cur_id).val(next_bukti);
        
        
        // const [filePath, setFilePath]= useState("");
        // const [fileName, setFileName] = useState("");
        // const [dataTypeName, setDataTypeName] = useState("")
        
        
        // const textArea = document.getElementById("explain");
        
        
        // function inputProveDocumentTrigger(event){
        //     let newValue = event.targer.value;
        //     setDataTypenName(newValue);
        // }
        
      
        let form = 
        `<div class="form-group mt-3" id="field_bukti_${cur_id+'_'+next_bukti}">
            <div class="form-group mb-0 mt-2 mb-0">
                <span class="h5 text-muted mb-2"><u> Bukti Relevan ${next_bukti} </u></span><br>
            </div>
            <div class='pt-3 pb-3'>
                <select 
                    name='bukti_added_${cur_id+"_"+next_bukti}' 
                    id='bukti_added_${cur_id+"_"+next_bukti}'
                    
                >
                    <option value='test1' disabled selected>Select the existing proven docs</option>
                    <?php foreach($data_persyaratan AS $data): ?>
                        <option value="<?= $data['bukti_path'].','. $data['bukti_file'] ?>"><?= $data['nama_persyaratan'] ?></option>
                    <?php endforeach; ?>
                </select> 
            </div>
            <div class="form-group form-row mb-1">
                <div class="col-12 col-md-12">
                    <textarea 
                    name="note_bukti_${cur_id+'_'+next_bukti}" 
                    class="form-control mb-1" 
                    placeholder="Berikan penjelasan terkait bukti anda" 
                    col="3" 
                    required=""
                    id="note_bukti_${cur_id+'_'+next_bukti}" 
                    
                    >
                    </textarea>
                </div>
            </div>
            <div class="form-group form-row">
                <div class="col-12 col-md-12" style="font-size: 22px;">
                    <input type="text" name="file_bukti_link_${cur_id+'_'+next_bukti}" class="form-control" placeholder="lampirkan bukti yang relevan" id="file_bukti_link_${cur_id+'_'+next_bukti}">
                    <input type="text" name="file_bukti_name_${cur_id+'_'+next_bukti}" class="form-control" placeholder="lampirkan bukti yang relevan" id="file_bukti_name_${cur_id+'_'+next_bukti}">
                </div>
            </div>
            <div class="form-group form-row">
                <div class="col-12 col-md-12" style="font-size: 22px;">
                    <input type="file" name="file_bukti_${cur_id+'_'+next_bukti}" class="form-control" placeholder="lampirkan bukti yang relevan" id="file_bukti_${cur_id+'_'+next_bukti}">
                    <font class="font-size-sm text-danger">
                        Maximum file size: 2 MB<br> 
                        Allowed file extensions : .jpg, .jpeg, .png, .pdf
                    </font>
                </div>
            </div>
        </div>`;
        // <div class="col-12 col-md-2" style="font-size: 22px;">
        //     <button type="button" onclick="rmv_bukti_elemen_form('${cur_id}' , '${get_bukti}')" class="btn btn-danger btn-block si si-close" style="padding: 9.8px;"></button>
        // </div>
            
        $('#div_multi_bukti_'+cur_id).append(form);
        selectedTrigger(cur_id,next_bukti)

        check_btn_del_bukti(cur_id);
    }

    function rmv_bukti_elemen_form(cur_id)
    {
        var get_bukti = $("#count_bukti_"+cur_id).val();
        var next_bukti = (parseInt(get_bukti)-1);

        $('#field_bukti_'+cur_id+'_'+get_bukti).remove();

        
        $("#count_bukti_"+cur_id).val(next_bukti);

        check_btn_del_bukti(cur_id);
    }

    function check_btn_del_bukti(cur_id){
        var get_bukti = parseInt($("#count_bukti_"+cur_id).val());
        var get_default_count = parseInt($("#default_count_bukti_"+cur_id).val());
        

        if(get_bukti == get_default_count){
            $("#btn_hapus_bukti_"+cur_id).attr("disabled", true);
        }
        else {
            $("#btn_hapus_bukti_"+cur_id).removeAttr("disabled");
        }
    }

    function deletes_bukti(id){
        var checkbox_del_bukti = $('#delete_bukti_'+id).prop('checked');

        if(checkbox_del_bukti == true){
            $('#div_bukti_'+id).attr("style", "background: #f9d2d6;");
        }
        else {
            $('#div_bukti_'+id).removeAttr("style");
        }
    }

    // denny made this 27/01/23 14:46
    // melimit jumlah char pada input bukti text area
    function check_limit_char(txtDom) {
        var count_char = txtDom.value.length;
        if(count_char > 1200){
            $('#counter').show();
            $('#counter').text("Sisa Karakter : "+(1500-count_char)+"/1500");
        }else{
            $('#counter').hide();
        }
    }
    
    
    function selectedTrigger(curID, index){
        // alert();
        // var element_triggered = $('#bukti_added_'+curID+'_'+index);
        const getSelectId = document.querySelector('#bukti_added_'+curID+'_'+index); // to get the id value for dropdown
        const getTextAreaId = document.querySelector('#note_bukti_'+curID+'_'+index); // to insert the value from the dropdown and it will be inserted into the text area
        const sendSelectedPathFile = document.querySelector('#file_bukti_link_'+curID+'_'+index) // to get the value of the id path for the selected path and sennd it to the server
        const sendTheFileName = document.querySelector('#file_bukti_name_'+curID+'_'+index); // to get the value of the name of the file and send it to the server
        const getFilePathId = document.querySelector('#file_bukti_'+curID+'_'+index);


        // switch(sendSelectedPathFile){
        //     case getSelectId.contains(''):
        //         let tempname = '';
        //         sendSelectedPathFile.addEventListener('change',() =>{
        //             let file = document.querySelector('#file_bukti_link'+curID+'_'+index);
        //             file.value = tempname;
        //         })
        //         break;
        //     case getFilePathId:
        //         sendSelectedPathFile.value = sendTheFileName.value;
        //         break;
        //     default:
        //         break;
        // }

    
        
        let start = 0;
        start+=1;
        
        // console.log(`It's been run for ${start}* time`);
        // // console.log(`The value of PathFileId : ${getFilePathId}`);
        // // console.log(`get select id ===> `, getSelectId)
        // console.log("get curId ===> ", curID);
        // console.log("get index ===> ", index);
        // console.log("get textareaid ===> ", getTextAreaId);
        // console.log("get textareaidjquery ===> ", $('input[name="note_bukti_'+curID+'_'+index+'"]'));

        getSelectId.addEventListener("change", (event)=>{
            // console.log("target ===> ",event);
            // console.log("select targeted ===> ",event.target);
            // console.log("select value ===> ", event.target.value);
            // console.log("select file name ===> ", event.target.options[event.target.options.selectedIndex].firstChild.data);
            // console.log("split value ===> ", event.target.value.split(','));
    
            getTextAreaId.value = event.target.options[event.target.options.selectedIndex].firstChild.data;
            const separateFile = event.target.value.split(',');
            console.log(`SEperate : ${separateFile}`);
            sendSelectedPathFile.value = separateFile[0];
            sendTheFileName.value = separateFile[1];
            // sendTheFileName.value = event.target.value;
        //   sendSelected
        })
        // console.log('===> element_triggered', element_triggered[0]);
        // element_triggered.addEventListener("change", buttonTriggerProvenDocument("this", curID, index));
    }

    function checkAllK(){
        // const id = document.getElementById('click_me')
        var jml_elemen = $("#loop_elemen").val();

        // alert("Clicked on K")
        // console.log(`the vaSlue of the id ${id}`);
        for(let i=1; i<=jml_elemen; i++){
            // const el = document.getElementById('click_me');
            const checkBoxK = $('#radioapl02-a-'+i)
            const checkBoxBK = $('#radioapl02-b-'+i)

            // console.log("CHECKBOX", checkBoxK);
            // console.log("CHECKBOXBK", checkBoxBK);
            // return;
            if(checkBoxK.checked){
                checkBoxK.checked= false;
                $("#div_radioapl02-a-"+i).addClass('text-white');
                $("#div_radioapl02-a-"+i).removeClass('text-success');
                console.log("div :",  $("#div_radioapl02-a-"+i));
                // alert('if running')

            }
            else{
                checkBoxK.checked = true;
                $('#radioapl02-a-'+i).attr('checked', true);
                $("#div_radioapl02-a-"+i).addClass('text-success');
                $("#div_radioapl02-a-"+i).removeClass('text-white');
                console.log("div :",  $("#div_radioapl02-a-"+i));
                // alert("another check")         
                if(checkBoxBK.checked){
                    checkBoxBK = false;
                    $("#div_radioapl02-b-"+i).addClass('text-white');
                    $("#div_radioapl02-b-"+i).removeClass('text-success');
                }  
            }
        }
    }

    function checkAllBK(){
        var jml_elemen = $("#loop_elemen").val();

// alert("Clicked on K")
// console.log(`the vaSlue of the id ${id}`);
for(let i=1; i<=jml_elemen; i++){
    // const el = document.getElementById('click_me');
    const checkBoxK = $('#radioapl02-a-'+i)
    const checkBoxBK = $('#radioapl02-b-'+i)

    // console.log("CHECKBOX", checkBoxK);
    // console.log("CHECKBOXBK", checkBoxBK);
    // return;
    if(checkBoxBK.checked){
        checkBoxBK.checked= false;
        $("#div_radioapl02-b-"+i).addClass('text-white');
        $("#div_radioapl02-b-"+i).removeClass('text-success');
        console.log("div :",  $("#div_radioapl02-b-"+i));
        // alert('if running')

    }
    else{
        checkBoxBK.checked = true;
        $('#radioapl02-b-'+i).attr('checked', true);
        $("#div_radioapl02-b-"+i).addClass('text-success');
        $("#div_radioapl02-b-"+i).removeClass('text-white');
        console.log("div :",  $("#div_radioapl02-a-"+i));
        // alert("another check")          
        if(checkBoxK.checked){
            checkBoxK = false;
            $("#div_radioapl02-a-"+i).addClass('text-white');
            $("#div_radioapl02-a-"+i).removeClass('text-success');
        }  
    }
}
    }
    
    function buttonTriggerProvenDocument(domSelect,curId, countIndex){
        console.log('===> curId', curId);
        console.log('===> countIndex', countIndex);
        // console.log('===> domSelect', domSelect.target);
        console.log('===> domSelect', domSelect.value);
        // $('input[name="note_bukti_'+curId+'_'+countIndex+'"]').val()
    }
</script>