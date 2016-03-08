Deface::Override.new(:virtual_path => 'spree/shared/_products',
    :name => 'change sell text',
    :replace => 'class#price selling lead',
    :text => "
      <p>
      BudHound 2016
      </p>
")
